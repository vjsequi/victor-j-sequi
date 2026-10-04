import { readdir, readFile } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';
import { pathToFileURL } from 'node:url';

const rules = [
  ['email address', /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i],
  ['direct contact link', /(?:mailto|tel|sms|whatsapp):|(?:wa\.me|api\.whatsapp\.com)\//i],
  ['international phone number', /(?:^|[\s>"'(])\+\d{1,3}[\s().-]*(?:\d[\s().-]*){8,13}\d\b/m],
  ['long phone-like number', /\b\d{9,15}\b/],
  ['local filesystem path', /(?:\/Users\/|\/home\/|[A-Z]:\\Users\\)/i],
  ['private key', /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/],
  ['credential token', /(?:AKIA[0-9A-Z]{16}|AIza[0-9A-Za-z_-]{35}|gh[pousr]_[0-9A-Za-z]{30,}|github_pat_[0-9A-Za-z_]{30,})/],
  ['personal location disclosure', /\b(?:based|located|living)\s+in\b|\b(?:home|residential)\s+address\b/i],
  ['address or coordinates', /["']?(?:streetAddress|postalCode|homeAddress|latitude|longitude)["']?\s*[:=]/i],
  ['source map', /sourceMappingURL\s*=/],
];

const siteHost = new URL(process.env.SITE_URL || 'http://localhost:4321').hostname;
const allowedHosts = new Set(['www.linkedin.com', 'pulpoposiciones.com', siteHost]);
const textExtensions = new Set(['.astro', '.ts', '.js', '.mjs', '.md', '.html', '.css', '.json', '.xml', '.txt', '.svg']);
const forbiddenExtensions = new Set(['.pdf', '.docx', '.csv', '.env', '.pem', '.key', '.map']);

export function findViolations(text) {
  const hits = rules.filter(([, pattern]) => pattern.test(text)).map(([name]) => name);
  for (const match of text.matchAll(/(?:href|src)\s*=\s*["'](https?:\/\/[^"']+)["']/gi)) {
    try {
      if (!allowedHosts.has(new URL(match[1]).hostname)) hits.push('unapproved external link');
    } catch { hits.push('invalid external link'); }
  }
  return [...new Set(hits)];
}

async function walk(dir) {
  const files = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isSymbolicLink()) throw new Error('Public source must not contain symbolic links.');
    if (entry.isDirectory()) files.push(...await walk(path));
    else files.push(path);
  }
  return files;
}

export async function checkPublic(root = process.cwd()) {
  let checked = 0;
  const failures = [];
  for (const directory of ['src', 'public', 'dist']) {
    for (const file of await walk(join(root, directory))) {
      const extension = extname(file).toLowerCase();
      if (forbiddenExtensions.has(extension) || file.split('/').some(part => part.startsWith('.env'))) {
        failures.push(`${relative(root, file)}: forbidden public file type`);
      }
      if (!textExtensions.has(extension)) continue;
      checked++;
      for (const violation of findViolations(await readFile(file, 'utf8'))) {
        failures.push(`${relative(root, file)}: ${violation}`);
      }
    }
  }
  if (failures.length) throw new Error(`Public-content check failed:\n${failures.join('\n')}`);
  return checked;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try { console.log(`Public-content check passed (${await checkPublic()} text files).`); }
  catch (error) { console.error(error.message); process.exitCode = 1; }
}

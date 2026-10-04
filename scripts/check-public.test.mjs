import test from 'node:test';
import assert from 'node:assert/strict';
import { findViolations } from './check-public.mjs';

test('rejects contact details, location fields, and private paths', () => {
  const cases = [
    ['example' + '@' + 'example.test', 'email address'],
    ['tel:' + '+440000000000', 'direct contact link'],
    ['Call ' + '+44 7700 900123', 'international phone number'],
    ['number: ' + '600000000', 'long phone-like number'],
    ['/' + 'Users/person/private', 'local filesystem path'],
    ['streetAddress: example', 'address or coordinates'],
    ['-----BEGIN PRIVATE KEY-----', 'private key'],
    ['Based in Example City', 'personal location disclosure'],
  ];
  for (const [input, expected] of cases) assert.ok(findViolations(input).includes(expected), expected);
});

test('allows publication dates, software names, and the contact allowlist', () => {
  assert.deepEqual(findViolations('Updated 2026-10-04. Python, PySpark, SQL. 2016 - 2021.'), []);
  assert.deepEqual(findViolations('<a href="https://www.linkedin.com/in/victorsequi/">LinkedIn</a>'), []);
  assert.deepEqual(findViolations('<a href="https://pulpoposiciones.com/oposiciones/enaire-controladores">Project</a>'), []);
});

test('blocks unreviewed outbound destinations and source maps', () => {
  assert.ok(findViolations('<a href="https://example.test/profile">Contact</a>').includes('unapproved external link'));
  assert.ok(findViolations('sourceMappingURL=app.js.map').includes('source map'));
});

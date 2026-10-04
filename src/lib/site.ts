export const profile = {
  name: 'Victor J. Sequi',
  linkedin: 'https://www.linkedin.com/in/victorsequi/',
  description: 'Technical leadership, data systems, and applied AI. Projects and field notes by Victor J. Sequi.',
};

export function url(path = '') {
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}

export function displayDate(date: Date) {
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

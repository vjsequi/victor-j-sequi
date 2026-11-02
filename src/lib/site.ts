export const profile = {
  name: 'Victor J. Sequi',
  headline: 'Product Technical Lead \u00b7 AI & Data',
  tagline: 'Connecting business needs, product decisions, and engineering to deliver useful systems.',
  linkedin: 'https://www.linkedin.com/in/victorsequi/',
  description: 'Product Technical Lead across AI and data. Connecting business needs, product decisions, and engineering to deliver useful systems.',
};

export function url(path = '') {
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}

export function displayDate(date: Date) {
  return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

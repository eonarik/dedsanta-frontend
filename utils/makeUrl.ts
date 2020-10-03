import pages, { PageState } from 'config/pages';

export default function makeUrl(slug: string) {
  const finded = pages.find((page: PageState) => page.slug === slug);
  return finded?.uri || '#';
}

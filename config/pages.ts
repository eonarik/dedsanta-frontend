import { getLocale } from 'utils';

export type PageState = {
  slug: string;
  uri: string;
  title?: string;
  hideMenu?: boolean;
}

const pages: PageState[] = [
  {
    slug: 'about',
    uri: '/about',
    title: getLocale('about_our_project'),
  },
  {
    slug: 'peoples',
    uri: '/peoples',
    title: getLocale('ded_morozes'),
  },
  {
    slug: 'special',
    uri: '/special',
    title: getLocale('special_offers'),
  },
  {
    slug: 'contacts',
    uri: '/contacts',
    title: getLocale('contacts'),
  },
  {
    slug: 'blog',
    uri: '/blog',
    title: getLocale('blog'),
  },
  {
    slug: 'login',
    uri: '/lk/login',
    title: getLocale('login'),
  },
  {
    slug: 'register',
    uri: '/lk/register',
    title: getLocale('register'),
  },
];

export default pages;

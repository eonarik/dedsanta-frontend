import Link from 'next/link';

import { FC, useMemo } from 'react';

import pages from 'config/pages';

const MENU_SLUGS: string[] = [
  'about',
  'peoples',
  'special',
  'contacts',
];

interface IProps {
  outerClass?: string;
}

const MainMenu: FC<IProps> = ({ outerClass }) => {
  const menuPages = useMemo(() =>
    pages.filter(({ slug }) => MENU_SLUGS.includes(slug))
    , []);

  return (
    <ul className={outerClass}>
      {menuPages.map(({ slug, title, uri }) => (
        <li key={slug}>
          <Link href={uri}><a>{title}</a></Link>
        </li>
      ))}
    </ul>
  );
}

export default MainMenu;

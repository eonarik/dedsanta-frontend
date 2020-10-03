import { FC, ReactNode } from 'react';

import Layout from '#/site/Layout';

import { getLocale } from 'utils';

interface IProps {
  pagetitle: string;
  children?: ReactNode;
}

const CommonPage: FC<IProps> = ({ pagetitle, children }) => {
  return (
    <Layout pagetitle={pagetitle}>
      <div className="container">
        <h1>{pagetitle}</h1>
        {children || (
          <p>{getLocale('section_is_development')}</p>
        )}
      </div>
    </Layout>
  );
}

export default CommonPage;

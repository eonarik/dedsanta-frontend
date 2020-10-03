import { FC } from 'react';

import Layout from '#/site/Layout';

const PAGETITLE: string = 'Личный кабинет';

interface IProps {
  pagetitle: string;
}

const PageComponent: FC<IProps> = (props) => (
  <Layout {...props} />
);

export const getStaticProps = () => ({
  props: {
    pagetitle: PAGETITLE,
  },
});

export default PageComponent;

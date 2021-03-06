import { FC } from 'react';

import Layout from '#/site/Layout';
import { getLocale } from '@/utils';

const PAGETITLE: string = getLocale('ded_morozes');

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

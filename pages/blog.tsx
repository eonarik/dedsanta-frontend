import { FC } from 'react';

import Blog from '@/modules/Blog';
import { getLocale } from '@/utils';

const PAGETITLE: string = getLocale('blog');

interface IProps {
  pagetitle: string;
}

const PageComponent: FC<IProps> = (props) => (
  <Blog {...props} />
);

export const getStaticProps = () => ({
  props: {
    pagetitle: PAGETITLE,
  },
});

export default PageComponent;

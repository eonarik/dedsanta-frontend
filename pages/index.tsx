import { FC } from 'react';

import Mainpage from '@/modules/Mainpage';
import { getLocale } from '@/utils';

const PAGETITLE: string = getLocale('home');

interface IProps {
  pagetitle: string;
}

const PageComponent: FC<IProps> = (props) => (
  <Mainpage {...props} />
);

export const getStaticProps = () => ({
  props: {
    pagetitle: PAGETITLE,
  },
});

export default PageComponent;

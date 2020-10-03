import { FC } from "react";

import CommonPage from '#/site/CommonPage';

interface IProps {
  pagetitle: string;
}

const Blog: FC<IProps> = ({ pagetitle }) => {
  return (
    <CommonPage pagetitle={pagetitle}>

    </CommonPage>
  );
}

export default Blog;

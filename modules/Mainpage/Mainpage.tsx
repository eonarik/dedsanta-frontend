import React from 'react';

import Layout from '#/site/Layout';

import { assetsSiteFolder } from 'config/app.json';

import Search from './sections/Search';
import Slider from './sections/Slider';
import RatingTopPeoples from './sections/RatingTopPeoples';
import Blog from './sections/Blog';
import Feed from './sections/Feed';

interface IProps {
  pagetitle: string;
}

const Home: React.FC<IProps> = ({ pagetitle }) => {
  return (
    <Layout pagetitle={pagetitle} afterHeader={(
      <>
        <Slider />

        <Search />

        <div className="decoration">
          <div className="container">
            <img
              className="decoration__image decoration__image--1"
              src={`${assetsSiteFolder}img/decor-gift-2.png`}
              alt=""
            />
          </div>
        </div>
      </>
    )}>

      <RatingTopPeoples />

      <Blog />

      <Feed />
    </Layout >
  )
}

export default Home;

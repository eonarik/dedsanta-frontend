import Carousel from 'react-elastic-carousel';

import { assetsSiteFolder } from 'config/app.json';
import { getLocale } from '@/utils';

import LastPost from './LastPost';

const Slider = () => {
  return (
    <section className="section-slider">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-12 col-md-8 col-lg-8 col-xl-9">
            <div className="header__slider">
              <Carousel
                itemsToShow={1}
                pagination={false}
                showArrows={false}
                itemPadding={[0, 0, 0, 0]}
              >
                <div className="slider-item" style={{ backgroundImage: `url('${assetsSiteFolder}img/2020.jpg')` }}>
                  <div className="slider-item__title">
                    <div className="row">
                      <div className="col-12 col-lg-6">{getLocale('happy_new_year')}</div>
                    </div>
                  </div>
                </div>
                <div className="slider-item" style={{ backgroundImage: `url('${assetsSiteFolder}img/2020.jpg')` }}>
                  <div className="slider-item__title">
                    <div className="row">
                      <div className="col-12 col-lg-6">{getLocale('happy_new_year')}</div>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>

          <div className="col-12 col-md-4 col-lg-4 col-xl-3">
            <LastPost />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;
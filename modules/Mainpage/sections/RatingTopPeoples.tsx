import { useCallback, useEffect, useState } from 'react';

import getRatingTopPeoples from '$/peoples/getRatingTopPeoples';
import { getLocale } from '@/utils';

import { PeopleState } from 'modules/types';

const Catalog = () => {
  const [peoples, setPeoples] = useState<PeopleState[] | null>(null);

  const receivePeoples = useCallback(() => {
    getRatingTopPeoples().then((peoples: PeopleState[]) => {
      setPeoples(peoples);
    }).catch((e) => console.error(e));
  }, []);

  useEffect(() => { receivePeoples(); }, [receivePeoples]);

  return (
    <section className="section-catalog">
      <div className="container">
        <h2>
          <div className="d-flex align-items-center">
            {getLocale('best_holiday_from_them')}
            <a href="#" className="btn btn-danger btn-sm ml-x2">{getLocale('see_all')}</a>
          </div>
          <small>{getLocale('recommendation_leaders')}</small>
        </h2>

        {peoples
          ? (
            <div className="row">
              {peoples.map((peopleProps: PeopleState) => (
                <div key={peopleProps.id} className="col-12 col-lg-6">
                  <CatalogItem {...peopleProps} />
                </div>
              ))}
            </div>
          )
          : (
            <div className="row">
              <div className="col-12 col-lg-6">
                <CatalogItemFaked />
              </div>
              <div className="col-12 col-lg-6">
                <CatalogItemFaked />
              </div>
            </div>
          )
        }
      </div>
    </section>
  );
}

const CatalogItem: React.FC<PeopleState> = ({
  image,
  introtext,
  pagetitle,
  uri,
  user_avatar,
  user_rating,
  user_region,
  user_year_old,
  user_work_experience,
}) => (
    <div className="santa">
      <div className="santa__image" style={{ backgroundImage: `url('${image}')` }}></div>

      <div className="santa__body">
        <a href={uri} className="santa__avatar">
          <img src={user_avatar} alt="" />
        </a>

        <div className="santa__fio">
          <a href={uri}>{pagetitle}</a>
        </div>
        <div className="santa__age">{user_year_old} {getLocale('year_old')}</div>

        <div className="santa__section">
          <div className="santa__section__title">{getLocale('work_experience')}:</div>
          <div className="santa__section__value">{user_work_experience}</div>
        </div>

        <div className="santa__section">
          <div className="santa__section__title">{getLocale('region')}:</div>
          <div className="santa__section__value">{user_region}</div>
        </div>

        <div className="santa__section">
          <div className="santa__section__title">{getLocale('about_yourself')}:</div>
          <div className="santa__section__value">
            {introtext}
          </div>
        </div>

        <div className={`santa__rating-bottom santa__rating-bottom--${Math.round(user_rating)}`}>
          {getLocale('rating')}: <span className="text-primary">{user_rating}</span>
        </div>
      </div>
    </div>
  );

const CatalogItemFaked: React.FC = () => (
  <div className="santa santa--faked">
    <div className="santa__image" style={{ background: '#CCC' }}></div>
    <div className="santa__body">
      <div className="santa__avatar" style={{ background: '#CCC', width: 122, height: 122 }}></div>
      <div className="santa__fio" style={{ background: '#CCC', height: 26 }}></div>
      <div className="santa__age" style={{ background: '#CCC', height: 24, width: '20%' }}></div>
      <div className="santa__section">
        <div className="santa__section__title">{getLocale('work_experience')}:</div>
        <div className="santa__section__value" style={{ background: '#CCC', height: 19, width: '35%' }}></div>
      </div>
      <div className="santa__section">
        <div className="santa__section__title">{getLocale('region')}:</div>
        <div className="santa__section__value" style={{ background: '#CCC', height: 19, width: '80%' }}></div>
      </div>
      <div className="santa__section">
        <div className="santa__section__title">{getLocale('about_yourself')}:</div>
        <div className="santa__section__value">
          <span style={{ display: 'block', background: '#CCC', height: 13, marginBottom: 8 }}></span>
          <span style={{ display: 'block', background: '#CCC', height: 13, marginBottom: 8 }}></span>
          <span style={{ display: 'block', background: '#CCC', height: 13, marginBottom: 8 }}></span>
          <span style={{ display: 'block', background: '#CCC', height: 13 }}></span>
        </div>
      </div>
      <div className={`santa__rating-bottom santa__rating-bottom--0`}>
        {getLocale('rating')}: <span style={{ display: 'inline-block', verticalAlign: 'middle', background: '#CCC', height: 13, width: 15, }}></span>
      </div>
    </div>
  </div>
);

export default Catalog;

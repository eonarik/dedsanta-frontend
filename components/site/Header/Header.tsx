import Link from 'next/link';

import { assetsSiteFolder, siteName, supportPhone } from 'config/app.json';
import getLocale from 'utils/getLocale';

import MainMenu from '#/site/MainMenu';

import * as locales from './lang';
import { makeUrl } from '@/utils';

export default function Header({ children }) {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8">
            <div className="row">
              <div className="col-6 col-sm-6 col-md-4 col-lg-5">
                <Link href="/">
                  <a className="header__logo">
                    <img src={`${assetsSiteFolder}img/logo-2x.png`} alt={siteName} />
                    <span className="header__logo__text">
                      {getLocale('ded_moroz_for_new_year', locales)}
                    </span>
                  </a>
                </Link>
              </div>
              <div className="col-6 col-sm-6 col-md-4 col-lg-3">
                <MainMenu outerClass={'header__menu'} />
              </div>
              <div className="col-12 col-md-4 col-lg-4">
                <div className="header__actions">
                  <a href="#" className="btn btn-danger btn-block">
                    {getLocale('choose_ded_moroz', locales)}
                  </a>
                  <p>{getLocale('pick_up_ded_moroz_on_your_holiday', locales)}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="header__right">
              <div className="row">
                <div className="col-12 col-sm-6 col-md-5 col-lg-12">
                  <div className="header__right__auth">
                    <Link href={makeUrl('login')}><a>{getLocale('to_login')}</a></Link>
                    <span> / </span>
                    <Link href={makeUrl('register')}><a>{getLocale('to_registration')}</a></Link>
                  </div>
                  <div className="header__right__phone">
                    <a href={`tel:${supportPhone.replace(/[^0-9]/g, '')}`}>{supportPhone}</a>
                    <small>{getLocale('general_support_service', locales)}</small>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-7 col-lg-12">
                  <div className="header__right__docs">
                    <div className="mb-x2">
                      <a href="#" className="document document--right">
                        <div className="document__icon">
                          <img src={`${assetsSiteFolder}img/icon-pencil-list-white-2x.png`} alt="" />
                        </div>
                        <div className="document__text">
                          <span className="text-underline">{getLocale('post_request_for_ded_moroz', locales)}</span>
                        </div>
                      </a>
                    </div>
                    <div className="mb-x2">
                      <a href="#" className="document document--right">
                        <div className="document__icon">
                          <img src={`${assetsSiteFolder}img/icon-santa-white-2x.png`} alt="" />
                        </div>
                        <div className="document__text">
                          <span className="text-underline">{getLocale('post_your_offer', locales)}</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {children}
    </header>
  );
}

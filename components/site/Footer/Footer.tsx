import { assetsSiteFolder, supportPhone } from 'config/app.json';

import MainMenu from '#/site/MainMenu';
import { getLocale } from '@/utils';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-xl-8">
            <div className="row justify-content-between">
              <div className="col-12 col-md-5 col-lg-6 col-xl-5">
                <div className="footer__phone">
                  <a href={`tel:${supportPhone}`}>{supportPhone}</a>
                </div>
                <p><small>{getLocale('general_support_service')}</small></p>
                <p className="social">
                  <a className="social__item social__item--fb" href="#" target="_blank" rel="noopener">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a className="social__item social__item--vk" href="#" target="_blank" rel="noopener">
                    <i className="fa fa-vk"></i>
                  </a>
                  <a className="social__item social__item--in" href="#" target="_blank" rel="noopener">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a className="social__item social__item--yt" href="#" target="_blank" rel="noopener">
                    <i className="fa fa-youtube"></i>
                  </a>
                </p>
                <p>
                  <a className="text-underline text-dark" href="#" target="_blank">
                    {getLocale('privacy_policy')}
                  </a> <br />
                  <a className="text-underline text-dark" href="#" target="_blank">
                    {getLocale('user_agreement')}
                  </a>
                </p>
              </div>
              <div className="col-12 col-md-3 col-lg-3">
                <MainMenu outerClass={'footer__menu'} />
              </div>
              <div className="col-12 col-md-3 col-lg-3">
              </div>
            </div>
            <div className="row align-items-center justify-content-between">
              <div className="col-12 order-3 col-md-4 col-lg-6 order-lg-1 col-xl-5">
                <div className="mb-x2"> &copy; {new Date().getFullYear()} {getLocale('all_rights_is_reserved')}</div>
              </div>
              <div className="col-12 order-1 col-md-4 col-lg-3 order-lg-2">
                <a href="#" className="document text-dark mb-x2">
                  <div className="document__icon">
                    <img src={`${assetsSiteFolder}img/icon-pencil-list-green-2x.png`} alt="" />
                  </div>
                  <div className="document__text">
                    <span className="text-underline">{getLocale('post_request_for_ded_moroz')}</span>
                  </div>
                </a>
              </div>
              <div className="col-12 order-2 col-md-4 col-lg-3 order-lg-3">
                <a href="#" className="document text-dark mb-x2">
                  <div className="document__icon">
                    <img src={`${assetsSiteFolder}img/icon-santa-green-2x.png`} alt="" />
                  </div>
                  <div className="document__text">
                    <span className="text-underline">{getLocale('post_your_offer')}</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-4">
            <div className="footer__decor">
              <img src={`${assetsSiteFolder}img/decor-peoples-4.png`} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

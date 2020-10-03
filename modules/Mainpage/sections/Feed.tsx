import { assetsSiteFolder } from 'config/app.json';
import { getLocale } from '@/utils';

const Feed = () => {
  return (
    <section className="section-feed">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-5">
            <div className="section-feed__logo">
              <img src={`${assetsSiteFolder}img/logo-big-with-text.png`} alt="" />
            </div>
          </div>
          <div className="col-12 col-lg-7">
            <p>{getLocale('seo_text_part_1')}</p>
            <p>{getLocale('seo_text_part_2')}</p>
          </div>
        </div>

        <h2>{getLocale('ask_us_question')}</h2>

        <form action="" data-action="send_question">
          <div className="row align-items-end">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="form-group">
                <label htmlFor="">{getLocale('your_name')}</label>
                <input name="fullname" className="form-control" type="text" />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div className="form-group">
                <label htmlFor="">{getLocale('your_phone')}</label>
                <input name="phone" className="form-control" type="text" />
              </div>
            </div>
          </div>
          <div className="row align-items-end">
            <div className="col-12 col-lg-8">
              <div className="form-group">
                <label htmlFor="">{getLocale('your_question')}</label>
                <textarea name="question" className="form-control"></textarea>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="form-group">
                <button className="btn btn-danger btn-lg btn-block" type="submit">{getLocale('submit_question')}</button>
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input name="agree" type="checkbox" className="custom-control-input" id="feed-agree" checked />
              <label className="custom-control-label" htmlFor="feed-agree">
                {getLocale('agreement_text')}
                {/* Я принимаю условия <a href="#" target="_blank" rel="noopener" className="text-underline">Пользовательского соглашения</a> и даю своё согласие на обработку моей персональной информации на условиях, определенных <a href="#" target="_blank" rel="noopener" className="text-underline">Политикой конфиденциальности</a>. */}
              </label>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Feed;

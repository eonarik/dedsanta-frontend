import { getLocale } from '@/utils';

const Search = () => {
  return (
    <section className="section-search">
      <div className="container">
        <h5>{getLocale('to_place_an_order')}</h5>

        <form action="" data-action="send_order">
          <input name="timezone" value="+0300" hidden />

          <div className="row align-items-end justify-content-end">
            <div className="col-12 col-lg-6">
              <div className="form-group">
                <label htmlFor="">{getLocale('enter_address_of_event')}</label>
                <input name="address" className="form-control form-control-lg" type="text" />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="form-group">
                <label htmlFor="">{getLocale('event_type')}</label>
                <div className="row h-form-control-lg align-items-center">
                  <div className="col-12 col-md-4">
                    <div className="custom-control custom-radio">
                      <input name="program_type" value="in_home" type="radio" id="search-type-1" className="custom-control-input" checked />
                      <label className="custom-control-label" htmlFor="search-type-1">{getLocale('ded_moroz_at_home')}</label>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="custom-control custom-radio">
                      <input name="program_type" value="in_kindergarten" type="radio" id="search-type-2" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="search-type-2">{getLocale('ded_moroz_at_kindergarten')}</label>
                    </div>
                  </div>
                  <div className="col-12 col-md-4">
                    <div className="custom-control custom-radio">
                      <input name="program_type" value="in_corporate_party" type="radio" id="search-type-3" className="custom-control-input" />
                      <label className="custom-control-label" htmlFor="search-type-3">{getLocale('ded_moroz_at_corporate')}</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-7 col-md-4 col-lg-4" data-block="program_date_date">
              <div className="form-group">
                <label htmlFor="">{getLocale('date_of_event')}</label>
                <input name="program_date_date" className="form-control form-control-lg" type="date" />
              </div>
            </div>
            <div className="col-5 col-md-3 col-lg-2" data-block="program_date_time">
              <div className="form-group">
                <label htmlFor="">{getLocale('time_of_event')}</label>
                <input name="program_date_time" className="form-control form-control-lg" type="time" />
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2" data-block="children_count">
              <div className="form-group">
                <label htmlFor="">{getLocale('number_of_children')}</label>
                <input name="children_count" className="form-control form-control-lg" type="text" />
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-2" data-block="rounded_age">
              <div className="form-group">
                <label htmlFor="">{getLocale('middle_age')}</label>
                <input name="rounded_age" className="form-control form-control-lg" type="text" />
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-2" data-block="program_dur">
              <div className="form-group">
                <label htmlFor="">{getLocale('program_duration')}</label>
                <input name="program_dur" className="form-control form-control-lg" type="number" />
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="form-group">
                <label htmlFor="">{getLocale('budget')}</label>
                <input name="budjet" className="form-control form-control-lg" type="number" />
              </div>
            </div>
            <div className="col-12 col-md-4 align-self-center">
              <div className="form-group">
                <label> &nbsp; </label>
                <div className="custom-control custom-checkbox">
                  <input name="is_snowmaiden" value="1" type="checkbox" className="custom-control-input" id="search-is-snowgirl" checked />
                  <label className="custom-control-label" htmlFor="search-is-snowgirl">{getLocale('need_program_with_snow_maiden')}</label>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="form-group">
                <button type="submit" className="btn btn-danger btn-block btn-lg">{getLocale('submit_order')}</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Search;

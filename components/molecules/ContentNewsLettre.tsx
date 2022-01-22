import Helpers from '../../styles/Home.module.css'
import { NewButton } from '../atoms/Button'
import NewInput from '../atoms/Input'
import { NewsLettreSocialicones } from '../atoms/newsLettreSocialIcones'
export const ContentNewsLettre = () => {
  return (
    <section className={`${Helpers.newslettre} newslettre`}>
      <div className="container-fluid">
        <div
          className={`${Helpers.newslettre_width} newslettre-width text-center`}
        >
          <div className={Helpers.newsletre_info}>
            <h5>Subscribe to our Newslatter</h5>
            <p>
              Sign up for free and be the first to get notified about new posts.
            </p>
          </div>
          <form
            action="#"
            className={`${Helpers.newslettre_form} newslettre-form`}
          >
            <div className={`${Helpers.form_flex} form-flex`}>
              <div className={`${Helpers.form_group} form-group`}>
                <NewInput
                  classname={`${Helpers.form_control} form-control`}
                  required={true}
                  placeholder="Your email adress"
                  type="email"
                />
              </div>
              <NewButton
                classname={`${Helpers.submit_btn} submit-btn`}
                content="Subscribe"
              />
            </div>
          </form>
          <NewsLettreSocialicones />
        </div>
      </div>
    </section>
  )
}

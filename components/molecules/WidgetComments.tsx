import widget from '../../styles/Widget.module.css'
import Home from '../../styles/Home.module.css'
import { ItemComment } from '../atoms/ItemComment'
import { Col, Row } from 'react-bootstrap'

export const WidgetComments = () => {
  return (
    <div className={`${widget.widget} ${Home.mb50} widget`}>
      <div className={`${widget.title} title`}>
        <h3>3 Comments</h3>
      </div>
      <ul className={`${widget.widget_comments} widget-comments`}>
        <ItemComment />
      </ul>
      <div className={`${widget.title} title`}>
        <h5>Leave a reply</h5>
      </div>
      <form className={` widget-form`}>
        <p>
          Your email adress will not be published ,Requied fileds are marked*.
        </p>
        <div
          className="alert alert-info contact_msg"
          style={{ display: 'none' }}
          role="alert"
        >
          Your message was sent successfully.
        </div>
        <Row>
          <Col md={12}>
            <div className={`${widget.form_group} form-group`}>
              <textarea
                name="message"
                id="message"
                className={`${widget.form_control} form-control`}
                placeholder="Message*"
                required
              />
            </div>
          </Col>
          <Col md={6}>
            <div className={`${widget.form_group} form-group`}>
              <input
                type="text"
                name="name"
                id="name"
                className={`${widget.form_control} form-control`}
                placeholder="Name*"
                required
              />
            </div>
          </Col>
          <Col md={6}>
            <div className={`${widget.form_group} form-group`}>
              <input
                type="text"
                name="name"
                id="name"
                className={`${widget.form_control} form-control`}
                placeholder="Name*"
                required
              />
            </div>
          </Col>
          <div className="col-12 mb-20">
            <div className={`${widget.form_group} form-group`}>
              <input type="text" name="name" id="name" />
            </div>
            <label>
              <span>
                save my name , email and website in this browser for the next
                time I comment.
              </span>
            </label>
          </div>
          <br />
          <div className="col-12">
            <button type="submit" name="submit" className={Home.btn_custom}>
              Post Comment
            </button>
          </div>
        </Row>
      </form>
    </div>
  )
}

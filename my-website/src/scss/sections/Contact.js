import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

import {
  faLinkedin,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Container from "../components/Container";
import Form from "../components/Form";
import "./_Contact.scss";

function Contact() {
  function openLinkedinHandler() {
    window.open(
      "https://www.linkedin.com/in/elena-hudrea-a36805164/",
      "_blank"
    );
  }

  function openFacebookHandler() {
    window.open(
      "https://www.facebook.com/profile.php?id=100009423701536",
      "_blank"
    );
  }

  function openInstagramHandler() {
    window.open("https://www.instagram.com/elenahudrea/", "_blank");
  }

  function getFormData(inputData) {
    fetch(
      "https://portfolio-website-1ad68-default-rtdb.firebaseio.com/formInfo.json",
      {
        method: "POST",
        body: JSON.stringify(inputData),
      }
    );
  }
  return (
    <Container>
      <div className="contact-component" id="contact">
        <div className="description">
          <h3 className="title">Let’s discuss on something Cool together</h3>

          <div className="info-contact">
            <div className="information">
              <div className="info-img">
                <FontAwesomeIcon icon={faPhone} className="icon" />
              </div>
              <Link to="tel:+40745667893" className="info-text">
                +4074540923
              </Link>
            </div>
            <div className="information">
              <div className="info-img">
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
              </div>
              <Link to="mailto:elena.hudrea@yahoo.com" className="info-text">
                elena.hudrea@yahoo.com
              </Link>
            </div>
          </div>

          <div className="buttons-container">
            <div onClick={openFacebookHandler} className="profiles">
              <FontAwesomeIcon icon={faFacebook} className="icon-btn" />
            </div>
            <div onClick={openInstagramHandler} className="profiles">
              <FontAwesomeIcon icon={faInstagram} className="icon-btn" />
            </div>
            <div onClick={openLinkedinHandler} className="profiles">
              <FontAwesomeIcon icon={faLinkedin} className="icon-btn" />
            </div>
          </div>
        </div>

        <div className="container-form">
          <Form onAddData={getFormData} />
        </div>
      </div>
    </Container>
  );
}

export default Contact;

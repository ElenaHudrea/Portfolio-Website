import { Link } from "react-router-dom";
import Container from "../components/Container";

import "./_Contact.scss";
import phone from "../../image/icons-illustrations/phone.png";
import email from "../../image/icons-illustrations/email.png";
import imgLinkedin from "../../image/icons-illustrations/linkedinIcon.png";
import imgFacebook from "../../image/icons-illustrations/facebook.png";
import imgInstagram from "../../image/icons-illustrations/instagram.png";

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
  return (
    <Container>
      <div className="contact-component" id="contact">
        <div className="description">
          <h3 className="title">Let’s discuss on something Cool together</h3>

          <div className="info-contact">
            <div className="information">
              <div className="info-img">
                <img src={phone} alt="phone icon"></img>
              </div>
              <Link to="tel:+40745667893" className="info-text">
                +4074540923
              </Link>
            </div>
            <div className="information">
              <div className="info-img">
                <img src={email} alt="email icon"></img>
              </div>
              <Link to="mailto:elena.hudrea@yahoo.com" className="info-text">
                elena.hudrea@yahoo.com
              </Link>
            </div>
          </div>

          <div className="buttons-container">
            <div onClick={openFacebookHandler} className="profiles">
              <img src={imgFacebook} alt="Facebook"></img>
            </div>
            <div onClick={openInstagramHandler} className="profiles">
              <img src={imgInstagram} alt="Instagram"></img>
            </div>
            <div onClick={openLinkedinHandler} className="profiles">
              <img src={imgLinkedin} alt="Linkedin"></img>
            </div>
          </div>
        </div>

        <div className="container-form"></div>
      </div>
    </Container>
  );
}

export default Contact;

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocation,
} from "@fortawesome/free-solid-svg-icons";

import Container from "../components/Container";
import "./_AboutMe.scss";

import imgAbout from "../../image/icons-illustrations/questions.png";

function AboutMe() {
  const handleClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  function openLocationHandler() {
    window.open("https://maps.app.goo.gl/q952enw599sw25SL9", "_blank");
  }

  function downloadHandler() {
    const pdfUrl =
      "https://github.com/ElenaHudrea/Portfolio-Website/blob/main/my-website/src/scss/HudreaElenaCV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Elena Hudrea-CV.pdf";

    link.click();
  }

  return (
    <div className="about-me-component" id="about-me">
      <Container>
        <h2 className="title">About Me</h2>

        <div className="content">
          <div className="container-img">
            <img src={imgAbout} alt="" />
          </div>

          <div className="description">
            <p className="text">
              I’m Elena Hudrea, a
              <span className="accent-blue"> Junior Frontend Developer</span>{" "}
              with a deep passion for this field. I found this passion a few
              years ago and since then I have been in continuous learning. I
              have cultivated various skills that help me pay great attention to
              details.
            </p>
            <div className="info-contact">
              <div className="information">
                <div className="info-img">
                  <FontAwesomeIcon icon={faLocation} className="icon" />
                </div>
                <Link onClick={openLocationHandler} className="info-text">
                  Cluj-Napoca, Romania
                </Link>
              </div>
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
              <Link
                to="#contact"
                onClick={(e) => handleClick(e, "contact")}
                id="nav-btn"
                className="primary-button"
              >
                Contact
              </Link>
              <div onClick={downloadHandler} className="primary-button transp">
                Download CV
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AboutMe;

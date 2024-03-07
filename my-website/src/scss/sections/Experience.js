import { Link } from "react-router-dom";
import Container from "../components/Container";
import "./_Experience.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faLink } from "@fortawesome/free-solid-svg-icons";
import Intro from "../components/Intro";

function Experience() {
  function openLocationHandler() {
    window.open("https://maps.app.goo.gl/q952enw599sw25SL9", "_blank");
  }

  function openSiteHandler() {
    window.open("https://www.wavemyth.com/", "_blank");
  }
  return (
    <Container>
      <div className="experience-component" id="experience">
        <Intro
          title="Experience"
          subtitle="Here is a quick summary of my experience"
        />

        <div className="experience-container">
          <div className="job">
            <p className="name">Junior Frontend Developer at Wavemyth</p>
            <p className="period">September 2023 - February 2024</p>
          </div>

          <div className="info-contact">
            <div className="information">
              <div className="info-img">
                <FontAwesomeIcon icon={faLocationDot} className="icon" />
              </div>
              <Link onClick={openLocationHandler} className="info-text">
                Cluj-Napoca, Romania
              </Link>
            </div>
            <div className="information">
              <div className="info-img">
                <FontAwesomeIcon icon={faLink} className="icon" />
              </div>
              <Link onClick={openSiteHandler} className="info-text">
                Wavemyth
              </Link>
            </div>
          </div>

          <ul>
            <li>Create components based on a given design.</li>
            <li>Create responsive components for different devices.</li>
            <li>Solve the bugs from existing design.</li>
            <li>Using of GitHub, Jira, Sitecore.</li>
          </ul>

          <div className="skills">
            <p className="skill-name">HTML</p>
            <p className="skill-name">CSS</p>
            <p className="skill-name">JavaScript</p>
            <p className="skill-name">jQuery</p>
            <p className="skill-name">SASS</p>
            <p className="skill-name">Sitecore</p>
            <p className="skill-name">GitHub</p>
            <p className="skill-name">Jira</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Experience;

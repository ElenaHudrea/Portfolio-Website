import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import Container from "../components/Container";
import "./_Home.scss";
import imgHero from "../../image/sections-img/heroImg.png";

function Home() {
  const handleClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  function openGitHubHandler() {
    window.open("https://github.com/ElenaHudrea/Portfolio-Website", "_blank");
  }

  function openLinkedinHandler() {
    window.open(
      "https://www.linkedin.com/in/elena-hudrea-a36805164/",
      "_blank"
    );
  }

  function downloadHandler() {
    window.open(
      "https://firebasestorage.googleapis.com/v0/b/portfolio-website-1ad68.appspot.com/o/Hudrea%20Elean-CV.pdf?alt=media&token=a590a58f-ead6-4d1d-9669-8401906e3c2b",
      "_blank"
    );
  }

  return (
    <div className="hero" id="home">
      <Container>
        <div className="hero-component">
          <div className="hero-description">
            <h1 className="hero-title">
              Hello, I'm <span className="accent-blue ">Elena</span>
            </h1>
            <p className="hero-text">Junior Frontend Developer</p>
            <div className="container-btn">
              <Link
                to="#contact"
                onClick={(e) => handleClick(e, "contact")}
                id="nav-btn"
                className="primary-button"
              >
                Contact
              </Link>
            </div>

            <div className="buttons-container">
              <div onClick={openGitHubHandler} className="profiles">
                <FontAwesomeIcon icon={faGithub} className="icon-btn" />
              </div>
              <div onClick={openLinkedinHandler} className="profiles">
                <FontAwesomeIcon icon={faLinkedin} className="icon-btn" />
              </div>

              <div onClick={downloadHandler} className="primary-button transp">
                Download CV
              </div>
            </div>
          </div>
          <div className="hero-img">
            <img src={imgHero} alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;

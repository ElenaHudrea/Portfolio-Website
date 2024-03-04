import { Link } from "react-router-dom";

import Container from "../components/Container";
import "./_Home.scss";
import imgHero from "../../image/sections-img/heroImg.png";
import imgGitHub from "../../image/icons-illustrations/gitHub.png";
import imgLinkedin from "../../image/icons-illustrations/linkedin.png";

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
    const pdfUrl =
      "https://github.com/ElenaHudrea/Portfolio-Website/blob/main/my-website/src/scss/HudreaElenaCV.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Elena Hudrea-CV.pdf";

    link.click();
  }

  return (
    <Container>
      <div className="hero-component" id="home">
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
              <img src={imgGitHub} alt="GitHub"></img>
            </div>
            <div onClick={openLinkedinHandler} className="profiles">
              <img src={imgLinkedin} alt="Linkedin"></img>
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
  );
}

export default Home;

import { Link } from "react-router-dom";
import "./_Footer.scss";
import logo from "../../image/logo/logoBlue.png";
import Container from "../components/Container";

function Footer() {
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

  const handleClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="footer">
      <Container>
        <footer className="footer-component">
          <div className="footer-links">
            <Link
              to="#home"
              onClick={(e) => handleClick(e, "home")}
              className="logo"
            >
              <img src={logo} alt="Logo" />
            </Link>
            <div className="footer-list">
              <p className="title-list">Menu</p>
              <Link
                to="#"
                onClick={(e) => handleClick(e, "home")}
                className="item-list"
              >
                Home
              </Link>
              <Link
                to="#about-me"
                onClick={(e) => handleClick(e, "about-me")}
                className="item-list"
              >
                About Me
              </Link>
              <Link
                to="#skills"
                onClick={(e) => handleClick(e, "skills")}
                className="item-list"
              >
                Skills
              </Link>
              <Link
                to="#experience"
                onClick={(e) => handleClick(e, "experience")}
                className="item-list"
              >
                Experience
              </Link>
              <Link
                to="#projects"
                onClick={(e) => handleClick(e, "projects")}
                className="item-list"
              >
                Projects
              </Link>
              <Link
                to="#contact"
                onClick={(e) => handleClick(e, "contact")}
                className="item-list"
              >
                Contact
              </Link>
            </div>

            <div className="footer-list">
              <p className="title-list">Follow Me</p>
              <div onClick={openFacebookHandler} className="item-list">
                <p>Facebook</p>
              </div>
              <div onClick={openInstagramHandler} className="item-list">
                <p>Instagram</p>
              </div>
              <div onClick={openLinkedinHandler} className="item-list">
                <p>Linkedin</p>
              </div>
            </div>

            <div className="footer-list">
              <p className="title-list">Contact Me</p>
              <div className="information">
                <Link to="tel:+40745667893" className="item-list">
                  Phone: +4074540923
                </Link>
              </div>
              <div className="information">
                <Link to="mailto:elena.hudrea@yahoo.com" className="item-list">
                  Email: elena.hudrea@yahoo.com
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </Container>
    </div>
  );
}

export default Footer;

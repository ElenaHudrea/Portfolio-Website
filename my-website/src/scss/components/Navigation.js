import { Link } from "react-router-dom";

import "./_Navigation.scss";
import logo from "../../image/logo/logoBlue.png";
import Container from "./Container";

function Navigation() {
  const handleClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container>
      <nav className="navigation-component">
        <div className="elements-nav">
          <Link
            to="#home"
            onClick={(e) => handleClick(e, "home")}
            className="logo"
          >
            <img src={logo} alt="Logo"></img>
          </Link>

          <div className="menu">
            <ul className="list">
              <li className="list-link">
                <Link
                  to="#"
                  onClick={(e) => handleClick(e, "home")}
                  className="link-menu"
                >
                  Home
                </Link>
              </li>
              <li className="list-link">
                <Link
                  to="#about-me"
                  onClick={(e) => handleClick(e, "about-me")}
                  className="link-menu"
                >
                  About Me
                </Link>
              </li>
              <li className="list-link">
                <Link
                  to="#skills"
                  onClick={(e) => handleClick(e, "skills")}
                  className="link-menu"
                >
                  Skills
                </Link>
              </li>
              <li className="list-link">
                <Link
                  to="#experience"
                  onClick={(e) => handleClick(e, "experience")}
                  className="link-menu"
                >
                  Experience
                </Link>
              </li>
              <li className="list-link">
                <Link
                  to="#projects"
                  onClick={(e) => handleClick(e, "projects")}
                  className="link-menu"
                >
                  Projects
                </Link>
              </li>
            </ul>
            <Link
              to="#contact"
              onClick={(e) => handleClick(e, "contact")}
              id="nav-btn"
              className="primary-button"
            >
              Contact
            </Link>
          </div>
          <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </nav>
    </Container>
  );
}

export default Navigation;

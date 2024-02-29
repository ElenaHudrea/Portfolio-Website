import { Link } from "react-router-dom";

import "./_Navigation.scss";
import logo from "../../../image/logo/logo-blue.png";

function Navigation() {
  return (
    <nav className="navigation-component">
      <div className="elements-nav">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo"></img>
        </Link>

        <div className="menu">
          <ul className="list">
            <li className="list-link">
              <Link to="/" className="link-menu">
                Home
              </Link>
            </li>
            <li className="list-link">
              <Link to="/about-me" className="link-menu">
                About Me
              </Link>
            </li>
            <li className="list-link">
              <Link to="/skills" className="link-menu">
                Skills
              </Link>
            </li>
            <li className="list-link">
              <Link to="/experience" className="link-menu">
                Experience
              </Link>
            </li>
            <li className="list-link">
              <Link to="/projects" className="link-menu">
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

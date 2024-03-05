import Container from "../components/Container";
import "./_Skills.scss";

import css from "../../image/icons-illustrations/css.png";
import figma from "../../image/icons-illustrations/figma.png";
import git from "../../image/icons-illustrations/git.png";
import html from "../../image/icons-illustrations/html.png";
import jquery from "../../image/icons-illustrations/jquery.png";
import js from "../../image/icons-illustrations/js.png";
import mySQL from "../../image/icons-illustrations/mySQL.png";
import react from "../../image/icons-illustrations/react.png";
import sass from "../../image/icons-illustrations/sass.png";
import visualStudio from "../../image/icons-illustrations/visualStudio.png";
import xampp from "../../image/icons-illustrations/xampp.png";
import php from "../../image/icons-illustrations/php.png";

function Skills() {
  return (
    <Container>
      <div className="skills-component">
        <div className="intro">
          <h2 className="title">Skills</h2>
          <p className="subtitle">
            Below you can find the skills, tools and technologies I worked until
            now
          </p>
        </div>

        <div className="skills-container">
          <div className="skill">
            <div className="skill-img">
              <img src={html} alt=""></img>
            </div>

            <p className="skill-name">HTML5</p>
          </div>

          <div className="skill">
            <div className="skill-img">
              <img src={css} alt=""></img>
            </div>

            <p className="skill-name">CSS</p>
          </div>

          <div className="skill">
            <div className="skill-img">
              <img src={js} alt=""></img>
            </div>

            <p className="skill-name">JavaScript</p>
          </div>

          <div className="skill">
            <div className="skill-img">
              <img src={react} alt=""></img>
            </div>

            <p className="skill-name">React</p>
          </div>

          <div className="skill">
            <div className="skill-img">
              <img src={sass} alt=""></img>
            </div>

            <p className="skill-name">SASS</p>
          </div>

          <div className="skill">
            <div className="skill-img">
              <img src={jquery} alt=""></img>
            </div>

            <p className="skill-name">jQuery</p>
          </div>

          <div className="skill">
            <div className="skill-img">
              <img src={php} alt=""></img>
            </div>

            <p className="skill-name">PHP</p>
          </div>

          <div className="skill">
            <div className="skill-img">
              <img src={git} alt=""></img>
            </div>

            <p className="skill-name">Git</p>
          </div>

          <div className="skill">
            <div className="skill-img">
              <img src={visualStudio} alt=""></img>
            </div>

            <p className="skill-name">Visual Studio</p>
          </div>

          <div className="skill">
            <div className="skill-img">
              <img src={figma} alt=""></img>
            </div>

            <p className="skill-name">Figma</p>
          </div>

          <div className="skill">
            <div className="skill-img">
              <img src={mySQL} alt=""></img>
            </div>

            <p className="skill-name">MySQL</p>
          </div>

          <div className="skill">
            <div className="skill-img">
              <img src={xampp} alt=""></img>
            </div>

            <p className="skill-name">Xampp</p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Skills;

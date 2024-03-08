import Container from "../components/Container";
import Intro from "../components/Intro";
import PhotoSlider from "../components/Slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import "./_Projects.scss";

function Projects() {
  function openProjectWebsiteHandler() {
    window.open("https://projectbarbershop.netlify.app/", "_blank");
  }
  return (
    <Container>
      <div className="projects-component" id="projects">
        <Intro title="Some things I've Built" subtitle="" />

        <div className="project">
          <div className="slider-container">
            <PhotoSlider />
          </div>

          <div className="info-project">
            <p className="subtitle-project">Featured project</p>
            <h3 className="title-project">Barber Shop</h3>
            <div className="description">
              This project simulates a barber shop website. I created it using
              HTML5, CSS, SASS and JavaScript. The datas are stored in Local
              Storage. Users can view informations about barber shop salon,
              member of the salon, also they can make appointments. Before start
              the implementation I made a design for this project in Figma. If
              you want to see this project please click on the below button.
            </div>
            <div>
              <FontAwesomeIcon
                icon={faExternalLink}
                onClick={openProjectWebsiteHandler}
                className="icon"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Projects;

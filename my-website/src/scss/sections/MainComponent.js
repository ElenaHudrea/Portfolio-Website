import Home from "../sections/Home";
import AboutMe from "../sections/AboutMe";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Navigation from "../components/Navigation";
import Footer from "./Footer";

function MainComponent() {
  return (
    <div>
      <Navigation />
      <Home />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default MainComponent;

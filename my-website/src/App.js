import { Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./scss/sections/Home";
import AboutMe from "./scss/sections/AboutMe";
import Skills from "./scss/sections/Skills";
import Experience from "./scss/sections/Experience";
import Projects from "./scss/sections/Projects";
import Contact from "./scss/sections/Contact";

import Navigation from "./scss/components/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <Home />
      <AboutMe />
      <Skills />
      <Experience />
      <Projects />
      <Contact />

      <Routes>
        <Route path="#Home" exact element={Home} />
        <Route path="#about-me" element={AboutMe} />
        <Route path="#skills" element={Skills} />
        <Route path="#experience" element={Experience} />
        <Route path="#projects" element={Projects} />
        <Route path="#contact" element={Contact} />
      </Routes>
    </div>
  );
}

export default App;

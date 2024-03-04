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

      <Routes>
        <Route path="/" exact element={Home} />
        <Route path="/about-me" exact element={AboutMe} />
        <Route path="/skills" exact element={Skills} />
        <Route path="/experience" exact element={Experience} />
        <Route path="/projects" exact element={Projects} />
        <Route path="/contact" exact element={Contact} />
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";

import "./App.css";
import Home from "./scss/sections/Home";
import AboutMe from "./scss/sections/AboutMe";
import Skills from "./scss/sections/Skills";
import Experience from "./scss/sections/Experience";
import Projects from "./scss/sections/Projects";
import Contact from "./scss/sections/Contact";
import Loading from "./scss/components/Loading";
import MainComponent from "./scss/sections/MainComponent";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeForLoading = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeForLoading);
  }, []);

  return (
    <div>
      {isLoading ? <Loading /> : <MainComponent />}

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

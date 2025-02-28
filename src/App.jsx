import { useState } from "react";

import "./App.css";
import Header from "./Header/Header.jsx";
import Hero from "./Hero/Hero.jsx";
import { About } from "./About/About.jsx";
import { Projects } from "./Projects/Projects.jsx";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
    </>
  );
}

export default App;

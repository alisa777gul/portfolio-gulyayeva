import { useState } from "react";

import "./App.css";
import Header from "./Header/Header.jsx";
import Hero from "./Hero/Hero.jsx";
import { About } from "./About/About.jsx";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
    </>
  );
}

export default App;

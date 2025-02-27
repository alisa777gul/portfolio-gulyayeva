import React from "react";
import image from "../assets/alissa.jpg";
import css from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={css.hero} id="home">
      <div className={css.text}>
        <h1 className={css.title}>
          <span className={css.firstLine}>Hello,</span>
          <br />
          <span className={css.secondLine}>I'm Alisa Gulyayeva</span>
        </h1>
        <p className={css.position}>Front-End Developer</p>{" "}
      </div>
      <div className={css.buttons}>
        <button type="button" className={css.button}>
          Hire me
        </button>
        <a
          href="/Alisa_Gulyayeva_FrontEndDeveloper.pdf"
          download="Alisa_Gulyayeva_CV"
          className={css.button}
        >
          Download CV
        </a>
      </div>
      <img className={css.image} src={image} alt="Alisa Gulyayeva" />
    </div>
  );
};

export default Hero;

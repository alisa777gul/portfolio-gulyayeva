import React from "react";
import image from "../assets/alisa.jpg";
import css from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={css.hero}>
      <div className={css.textAndButtons}>
        <h1 className={css.title}>
          <span className={css.firstLine}>Hello,</span>
          <br />
          <span className={css.secondLine}>I'm Alisa Gulyayeva</span>
        </h1>
        <p className={css.position}>Frontend Developer</p>
        <div className={css.buttons}>
          <button type="button" className={css.button}>
            Hire me
          </button>
          <button type="button" className={css.button}>
            Download CV
          </button>
        </div>
      </div>
      <img
        className={css.image}
        src={image}
        width={400}
        height={600}
        alt="Alisa Gulyayeva"
      />
    </div>
  );
};

export default Hero;

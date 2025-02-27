import css from "./About.module.css";
import React from "react";
import image from "../assets/alissa.jpg";
export const About = () => {
  return (
    <div className={css.about} id="about">
      <img className={css.image} src={image} alt="Alisa Gulyayeva" />
      <div className={css.all}>
        <h2 className={css.title}>About me</h2>
        <h3 className={css.position}>Front-End developer</h3>
        <p className={css.text}>
          I am a Junior Front-End Developer skilled in HTML5, CSS3, JavaScript,
          and React. I am passionate about creating userfriendly, modern web
          solutions and continually improving my technical expertise. I adapt
          quickly to new environments, solve challenges effectively, and thrive
          in team settings. My strengths include analytical thinking,
          troubleshooting, and a proactive attitude that helps deliver
          high-quality results. I value growth, teamwork, and contributing to
          impactful projects.
        </p>
        <div className={css.buttons}>
          <button type="button" className={css.button}>
            My projects
          </button>
          <a
            href="/Alisa_Gulyayeva_FrontEndDeveloper.pdf"
            download="Alisa_Gulyayeva_CV"
            className={css.button}
          >
            CV
          </a>
        </div>
      </div>
    </div>
  );
};

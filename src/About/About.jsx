import React from "react";
import css from "./About.module.css";
import image from "../assets/girl.png";
import TechSkills from "../TechSkills/TechSkills";

export const About = () => {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const section = document.querySelector(`#${id}`);
    if (section) {
      const headerHeight = document.querySelector("header").offsetHeight;
      const sectionPosition = section.offsetTop - headerHeight;
      window.scrollTo({ top: sectionPosition, behavior: "smooth" });
    }
  };

  return (
    <section className={css.section} id="about">
      <TechSkills />
      <div className={css.about}>
        <img className={css.image} src={image} alt="Alisa Gulyayeva" />
        <div className={css.all}>
          <h2 className={css.title}>About me</h2>
          <h3 className={css.position}>Front-End developer</h3>
          <p className={css.text}>
            I am a Junior Front-End Developer skilled in HTML5, CSS3,
            JavaScript, and React. I am passionate about creating user-friendly,
            modern web solutions and continually improving my technical
            expertise. I adapt quickly to new environments, solve challenges
            effectively, and thrive in team settings. My strengths include
            analytical thinking, troubleshooting, and a proactive attitude that
            helps deliver high-quality results. I value growth, teamwork, and
            contributing to impactful projects.
          </p>
          <div className={css.buttons}>
            <a
              href="#projects"
              className={css.button}
              onClick={(e) => handleNavClick(e, "projects")}
            >
              My projects
            </a>
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
      <TechSkills direction="right" />
    </section>
  );
};

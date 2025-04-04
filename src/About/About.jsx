import React from "react";
import css from "./About.module.css";
import image from "../assets/girl.webp";
import TechSkills from "../TechSkills/TechSkills";
import { useTranslation } from "react-i18next";

export const About = () => {
  const { t } = useTranslation();

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
        <img
          className={css.image}
          src={image}
          alt="Alisa Gulyayeva"
          loading="lazy"
        />
        <div className={css.all}>
          <h2 className={css.title}>{t("about_title")}</h2>
          <h3 className={css.position}>Front-End {t("developer")}</h3>
          <p className={css.text}>{t("about_text")}</p>
          <div className={css.buttons}>
            <a
              href="#projects"
              className={css.button}
              onClick={(e) => handleNavClick(e, "projects")}
            >
              {t("projects_title")}
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

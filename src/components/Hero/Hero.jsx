import React from "react";
import image from "../../assets/alisa.webp";
import css from "./Hero.module.css";
import "../../App.css";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className={css.section} id="home">
      <div className={css.hero}>
        <h1 className="visually-hidden"> Portfolio hero</h1>
        <div className={css.text}>
          <h2 className={css.title}>
            <span className={css.firstLine}>{t("hello")},</span>
            <br />
            <span className={css.secondLine}>{t("intro")}</span>
          </h2>
          <p className={css.position}>Front-End {t("developer")}</p>
        </div>
        <div className={css.buttons}>
          <a href="mailto:gulyayevaalisa@gmail.com" className={css.button}>
            {t("hire")}
          </a>
          <a
            href="/Alisa_Gulyayeva_FrontEndDeveloper.pdf"
            download="Alisa_Gulyayeva_CV"
            className={css.button}
          >
            {t("cv")}
          </a>
        </div>
        <img
          className={css.image}
          src={image}
          alt="Alisa Gulyayeva"
          width={340}
          height={408}
        />
      </div>
    </section>
  );
};

export default Hero;

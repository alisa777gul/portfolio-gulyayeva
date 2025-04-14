import React from "react";
import css from "./Footer.module.css";
import icons from "../../assets/sprite.svg";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={css.footer}>
      <div className={css.logoAndName}>
        <a href="#" className={css.logo}>
          AG
        </a>
        <h3 className={css.name}>Alisa Gulyayeva</h3>
      </div>

      <p className={css.text}>{t("moto")}</p>
      <ul className={css.socials}>
        <li className={css.social}>
          <a
            href="https://www.instagram.com/frursnlshwumhrt/"
            target="_blank"
            className={css.link}
          >
            <svg className={css.icon}>
              <use href={`${icons}#icon-instagram`} />
            </svg>
          </a>
        </li>
        <li className={css.social}>
          <a
            href="https://t.me/iiikkklllm"
            target="_blank"
            className={css.link}
          >
            <svg className={css.icon}>
              <use href={`${icons}#icon-telegram`} />
            </svg>
          </a>
        </li>
        <li className={css.social}>
          <a
            href="https://github.com/alisa777gul"
            target="_blank"
            className={css.link}
          >
            <svg className={css.icon}>
              <use href={`${icons}#icon-github`} />
            </svg>
          </a>
        </li>
        <li className={css.social}>
          <a
            href="https://www.linkedin.com/in/alisa-gulyayeva/"
            target="_blank"
            className={css.link}
          >
            <svg className={css.icon}>
              <use href={`${icons}#icon-linkedin`} />
            </svg>
          </a>
        </li>
      </ul>

      <div className={css.info}>
        <div className={css.location}>
          <svg className={css.pin} width={12} height={12}>
            <use href={`${icons}#icon-location`} />
          </svg>
          <span> {t("country")}</span>
        </div>
        <p className={css.rights}>&#169; {t("rights_text")}</p>
      </div>
    </footer>
  );
};

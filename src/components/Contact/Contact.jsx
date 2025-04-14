import React from "react";
import css from "./Contact.module.css";

import "../../App.css";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className={css.section} id="contact">
      <div className={css.contact}>
        <h2 className="visually-hidden">Contact me</h2>
        <h3 className={css.text}>
          {t("contact_text")}
          <span> {t("contact_span")}</span>
        </h3>
        <a href="mailto:gulyayevaalisa@gmail.com" className={css.link}>
          {t("contact")}
        </a>
      </div>
    </section>
  );
};

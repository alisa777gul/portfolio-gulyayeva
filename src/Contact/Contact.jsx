import React from "react";
import css from "./Contact.module.css";

import "../App.css";

export const Contact = () => {
  return (
    <section className={css.section} id="contact">
      <div className={css.contact}>
        <h2 className="visually-hidden">Contact me</h2>
        <h3 className={css.text}>
          Liked my projects?<span> Feel free to Contact me!</span>
        </h3>
        <a href="mailto:gulyayevaalisa@gmail.com" className={css.link}>
          Contact me
        </a>
      </div>
    </section>
  );
};

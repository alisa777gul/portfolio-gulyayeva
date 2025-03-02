import React from "react";
import css from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.logoAndName}>
        <a href="#" className={css.logo}>
          AG
        </a>
        <h3 className={css.name}>Alisa Gulyayeva</h3>
      </div>

      <p className={css.text}>Code. Create. Inspire.</p>
      <ul className={css.socials}>
        <li className={css.social}>
          <a href="">
            <img src="/ig.svg" />
          </a>
        </li>
        <li className={css.social}>
          <a href="">
            <img src="/tg.svg" />
          </a>
        </li>
        <li className={css.social}>
          <a href="">
            <img src="/git.svg" />
          </a>
        </li>
        <li className={css.social}>
          <a href="">
            <img src="/linked.svg" />
          </a>
        </li>
      </ul>

      <div className={css.info}>
        <p className={css.location}>
          <img src="/dot.svg" /> Presov
        </p>
        <p className={css.rights}>&#169; 2025, All Rights By alisa777gul.</p>
      </div>
    </footer>
  );
};

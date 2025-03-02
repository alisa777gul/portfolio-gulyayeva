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
          <a href="https://www.instagram.com/frursnlshwumhrt/">
            <img src="/ig.svg" alt="insta" />
          </a>
        </li>
        <li className={css.social}>
          <a href="https://t.me/iiikkklllm">
            <img src="/tg.svg" alt="telegram" />
          </a>
        </li>
        <li className={css.social}>
          <a href="https://github.com/alisa777gul">
            <img src="/git.svg" alt="github" />
          </a>
        </li>
        <li className={css.social}>
          <a href="https://www.linkedin.com/in/alisa-gulyayeva/">
            <img src="/linked.svg" alt="linkedin" />
          </a>
        </li>
      </ul>

      <div className={css.info}>
        <p className={css.location}>
          <img src="/dot.svg" alt="place" /> Slovakia
        </p>
        <p className={css.rights}>
          &#169; 2025, All Rights Reserved By alisa777gul.
        </p>
      </div>
    </footer>
  );
};

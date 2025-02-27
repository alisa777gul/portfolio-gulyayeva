import React from "react";
import css from "./Header.module.css";

function Header() {
  return (
    <header className={css.header}>
      <a href="#" className={css.logo}>
        AG
      </a>
      <nav className={css.navigation} aria-label="Main navigation">
        <ul className={css.list}>
          <li className={css.element}>
            <a href="#">Home</a>
          </li>
          <li className={css.element}>
            <a href="#">About</a>
          </li>
          <li className={css.element}>
            <a href="#">Projects</a>
          </li>
          <li className={css.element}>
            <a href="#">Contact me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

import React, { useState } from "react";
import css from "./Header.module.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const clickOnNav = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`${css.header} ${menuOpen ? css.open : ""}`}>
      <a href="#" className={css.logo}>
        AG
      </a>

      <div className={css.burger} onClick={toggleMenu}>
        <div className={css.burgerLine}></div>
        <div className={css.burgerLine}></div>
        <div className={css.burgerLine}></div>
      </div>

      <div className={`${css.mobileMenu} ${menuOpen ? css.open : ""}`}>
        <ul>
          <li className={css.element} onClick={clickOnNav}>
            <a href="#">Home</a>
          </li>
          <li className={css.element} onClick={clickOnNav}>
            <a href="#about">About</a>
          </li>
          <li className={css.element} onClick={clickOnNav}>
            <a href="#">Projects</a>
          </li>
          <li className={css.element} onClick={clickOnNav}>
            <a href="#">Contact me</a>
          </li>
        </ul>
      </div>

      <nav className={css.navigation} aria-label="Main navigation">
        <ul className={css.list}>
          <li className={css.element}>
            <a href="#">Home</a>
          </li>
          <li className={css.element}>
            <a href="#about">About</a>
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

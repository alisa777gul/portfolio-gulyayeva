import React, { useState, useEffect } from "react";
import css from "./Header.module.css";
import LangSwitcher from "../LangSwitcher/LangSwitcher.jsx";
import { useTranslation } from "react-i18next";
import icons from "../assets/sprite.svg";

function Header() {
  const { t } = useTranslation();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.querySelector(`#${id}`);
      if (section) {
        const headerHeight = document.querySelector(
          `.${css.header}`
        ).offsetHeight;
        const sectionPosition = section.offsetTop - headerHeight;
        window.scrollTo({ top: sectionPosition, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={`${css.header} ${menuOpen ? css.open : ""}`}>
      <a href="#" className={css.logo}>
        AG
      </a>
      <LangSwitcher />
      <button
        className={css.burger}
        onClick={toggleMenu}
        aria-expanded={menuOpen}
      >
        <svg className={css.icon}>
          <use href={`${icons}#icon-menu`} />
        </svg>
      </button>

      <nav
        className={`${css.navigation} ${
          menuOpen ? `${css.mobileMenu} ${css.open}` : ""
        }`}
        aria-label="Main navigation"
      >
        <ul className={css.list}>
          <li className={css.element}>
            <a href="#" onClick={(e) => handleNavClick(e, "home")}>
              {t("home")}
            </a>
          </li>
          <li className={css.element}>
            <a href="#about" onClick={(e) => handleNavClick(e, "about")}>
              {t("about")}
            </a>
          </li>
          <li className={css.element}>
            <a href="#projects" onClick={(e) => handleNavClick(e, "projects")}>
              {t("projects")}
            </a>
          </li>
          <li className={css.element}>
            <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
              {t("contact")}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

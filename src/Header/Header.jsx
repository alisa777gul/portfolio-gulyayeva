import React, { useState, useEffect } from "react";
import css from "./Header.module.css";

function Header() {
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

      <button
        className={css.burger}
        onClick={toggleMenu}
        aria-expanded={menuOpen}
      >
        <div className={css.burgerLine}></div>
        <div className={css.burgerLine}></div>
        <div className={css.burgerLine}></div>
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
              Home
            </a>
          </li>
          <li className={css.element}>
            <a href="#about" onClick={(e) => handleNavClick(e, "about")}>
              About
            </a>
          </li>
          <li className={css.element}>
            <a href="#projects" onClick={(e) => handleNavClick(e, "projects")}>
              Projects
            </a>
          </li>
          <li className={css.element}>
            <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

import React, { useEffect, useState } from "react";
import css from "./LangSwitcher.module.css";
import i18next from "i18next";

const LangSwitcher = () => {
  const [activeLang, setActiveLang] = useState(i18next.language || "en");

  useEffect(() => {
    i18next.on("languageChanged", (lng) => setActiveLang(lng));
  }, []);

  const changeLanguage = (lng) => {
    if (activeLang !== lng) {
      i18next.changeLanguage(lng);
      setActiveLang(lng);
    }
  };

  return (
    <ul className={css.lngList}>
      {["en", "sk"].map((lng) => (
        <li key={lng} className={css.flag}>
          <button
            type="button"
            className={`${css.btn} ${activeLang === lng ? css.active : ""}`}
            onClick={() => changeLanguage(lng)}
          >
            <img
              src={
                lng === "en"
                  ? "/great-britain-flag.webp"
                  : "/slovakia-flag.webp"
              }
              alt={lng === "en" ? "English" : "Slovak"}
            />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default LangSwitcher;

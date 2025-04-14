import React from "react";
import { PuffLoader } from "react-spinners";
import css from "./MainLoader.module.css";

const MainLoader = () => {
  return (
    <div className={css.loader}>
      <PuffLoader color="#ff69b4" size={120} />
    </div>
  );
};

export default MainLoader;

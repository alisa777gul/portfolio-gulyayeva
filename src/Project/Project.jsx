import React from "react";
import css from "./Project.module.css";

export const Project = ({ project }) => {
  return (
    <div className={css.element}>
      <h3 className={css.title}>{project.name}</h3>
      <p className={css.tech}>{project.tech}</p>
      <img src={project.photo} className={css.photo} loading="lazy" />
      <div className={css.links}>
        <a href={project.git} className={css.link} target="_blank">
          GitHub
        </a>
        <a href={project.live} className={css.link} target="_blank">
          Live
        </a>
      </div>
    </div>
  );
};

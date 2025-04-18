import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterSlice.js";
import css from "./Projects.module.css";
import { ProjectsList } from "../ProjectsList/ProjectsList.jsx";
import projects from "../../json/projects.json";
import { useTranslation } from "react-i18next";

export const Projects = () => {
  const filter = useSelector((state) => state.filter.filter);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const handleFilterChange = (filterType) => {
    dispatch(setFilter(filterType));
  };

  return (
    <section className={css.section} id="projects">
      <div className={css.projects}>
        <h2 className={css.title}>{t("projects_title")}</h2>
        <div className={css.filter}>
          <button
            onClick={() => handleFilterChange("all")}
            className={filter === "all" ? css.activeFilter : ""}
          >
            {t("all")}
          </button>
          <button
            onClick={() => handleFilterChange("frontend")}
            className={filter === "frontend" ? css.activeFilter : ""}
          >
            Frontend
          </button>
          <button
            onClick={() => handleFilterChange("backend")}
            className={filter === "backend" ? css.activeFilter : ""}
          >
            Backend
          </button>
          <button
            onClick={() => handleFilterChange("fullstack")}
            className={filter === "fullstack" ? css.activeFilter : ""}
          >
            Fullstack
          </button>
        </div>

        <ProjectsList projects={filteredProjects} />
      </div>
    </section>
  );
};

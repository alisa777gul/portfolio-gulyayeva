import React, { useState } from "react";
import css from "./Projects.module.css";
import { ProjectsList } from "../ProjectsList/ProjectsList";
import projects from "../json/projects.json"; // Import your projects data

export const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const handleFilterChange = (filterType) => {
    setFilter(filterType);
  };

  return (
    <div className={css.projects} id="projects">
      <h2 className={css.title}>My Projects</h2>

      <div className={css.filter}>
        <button
          onClick={() => handleFilterChange("all")}
          className={filter === "all" ? css.activeFilter : ""}
        >
          All
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
  );
};

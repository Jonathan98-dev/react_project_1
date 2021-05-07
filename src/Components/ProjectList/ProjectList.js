import React from "react";
import "./projectList.scss";

const ProjectList = ({ projects }) => {
  return (
    <div className="projectList">
      {projects.map((project) => (
        <a href="/#" className="projectCard" key={project.id}>
          <h2>{project.title}</h2>
          <img src={project.imgLink} alt="projectImage" />
        </a>
      ))}
    </div>
  );
};

export default ProjectList;

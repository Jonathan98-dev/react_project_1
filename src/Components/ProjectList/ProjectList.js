import React from "react";
import "./projectList.scss";

const ProjectList = ({ projects }) => {
  console.log(projects);
  return (
    <div className="projectList">
      {projects.map((project) => (
        <a href="/#" className="projectCard" key={project.id}>
          <h2>{project.projectName}</h2>
          <img src={project.projectImage} alt="projectImage" />
        </a>
      ))}
    </div>
  );
};

export default ProjectList;

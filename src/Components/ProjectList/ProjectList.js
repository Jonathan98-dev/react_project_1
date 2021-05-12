import React from "react";
// import { Link } from "react-router-dom";
import "./projectList.scss";

// npx json-server --watch data/db.json --port 8000

const ProjectList = ({ projects }) => {
  return (
    <div className="projectList">
      {projects.map((project) => (
        <a
          href={project.projectLink}
          target="blank"
          className="projectCard"
          key={project.id}
        >
          <h2>{project.projectName}</h2>
          <img src={project.projectImage} alt="projectImage" />
          {/* <Link to={`/project/${project.id}`}>View This Project</Link> */}
        </a>
      ))}
    </div>
  );
};

export default ProjectList;

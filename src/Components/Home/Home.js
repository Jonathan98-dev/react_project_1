import { useState } from "react";
import ProjectList from "../ProjectList/ProjectList";
import "./homeStyle.scss";

const Home = () => {
  const [projects, setProjects] = useState([
    {
      title: "PLACEHOLDER",
      imgLink: "../../img/placeholder.jfif",
      projectLink: "",
      id: 1,
    },
    {
      title: "PLACEHOLDER",
      imgLink: "../../img/placeholder.jfif",
      projectLink: "",
      id: 2,
    },
    {
      title: "PLACEHOLDER",
      imgLink: "../../img/placeholder.jfif",
      projectLink: "",
      id: 3,
    },
    {
      title: "PLACEHOLDER",
      imgLink: "../../img/placeholder.jfif",
      projectLink: "",
      id: 4,
    },
  ]);

  return (
    <div className="homeComponent">
      <ProjectList projects={projects} />
    </div>
  );
};

export default Home;

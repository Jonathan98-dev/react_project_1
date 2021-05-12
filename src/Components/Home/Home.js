import useFetch from "../../Hooks/useFetch";
import ProjectList from "../ProjectList/ProjectList";
import "./homeStyle.scss";

const Home = () => {
  const { data, isLoading, error } = useFetch("http://localhost:8000/projects");

  return (
    <div className="homeComponent">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {data && <ProjectList projects={data} />}
    </div>
  );
};

export default Home;

import { Link } from "react-router-dom";
import "./navbarStyle.scss";

const Navbar = () => {
  return (
    <nav className="navbarComponent">
      <a className="logo" href="/">
        <img src="../../img/logo.png" alt="My Logo" />
      </a>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About me</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;

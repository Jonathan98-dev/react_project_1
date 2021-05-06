import "./navbarStyle.scss";

const Navbar = () => {
  return (
    <nav className="navbarComponent">
      <a className="logo" href="/#">
        <img src="../../img/logo.png" alt="My Logo" />
      </a>
      <div className="links">
        <a href="/#">Home</a>
        <a href="/#">About me</a>
        <a href="/#">Message me</a>
      </div>
    </nav>
  );
};

export default Navbar;

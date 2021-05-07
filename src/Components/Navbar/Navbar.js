import { useState } from "react";
import "./navbarStyle.scss";

const Navbar = () => {
  const [lightmode, setLightmode] = useState("../../img/lightOn.png");
  const handleClick = () => {
    setLightmode("../../img/lightOff.png");
  };

  return (
    <nav className="navbarComponent">
      <a className="logo" href="/#">
        <img src="../../img/logo.png" alt="My Logo" />
      </a>
      <div className="links">
        <a href="/#">Home</a>
        <a href="/#">About me</a>
        <a href="/#">Message me</a>
        <button onClick={handleClick} id="lightSwitch">
          <img src={lightmode} alt="lightBulb" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

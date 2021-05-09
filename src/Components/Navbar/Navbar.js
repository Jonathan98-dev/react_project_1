import { useState } from "react";
import "./navbarStyle.scss";

const Navbar = () => {
  let lightMode = true;
  let bgColor = getComputedStyle(document.documentElement).getPropertyValue(
    "--backgroundColor"
  );

  console.log(bgColor);
  const [lightmode, setLightmode] = useState("../../img/lightOn.png");
  const handleClick = () => {
    if (lightMode) {
      setLightmode("../../img/lightOff.png");
      lightMode = !lightMode;
      document.documentElement.style.setProperty("--backgroundColor", "black");
    } else {
      setLightmode("../../img/lightOn.png");
      lightMode = !lightMode;
      document.documentElement.style.setProperty("--backgroundColor", "white");
    }
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

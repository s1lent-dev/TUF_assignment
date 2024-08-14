// Imports
import { useState } from "react";

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(true);

  const toggleDarkMode = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className={`darkModeBtn ${isToggled ? "" : "dark"}`}>
      <div id="shape" className={`changer ${isToggled ? "" : "change"}`}></div>
      <div
        id="toggle"
        className={`changer ${isToggled ? "" : "change"}`}
        onClick={toggleDarkMode}
      >
        <span className={`changer ${isToggled ? "" : "change"}`}>
          <div className={`moonIcon ${isToggled ? "" : "change"}`}>
          </div>
          <div className={`sunIcon ${isToggled ? "" : "change"}`}>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Toggle;
// Imports
import { useState } from "react";
import { useToggle } from "@/utils/apiFeatures";
import { useSelector } from "react-redux";
import { BannerType } from "@/types/types";
import { RootState } from "@/context/store";
const Toggle = () => {

  const banner = useSelector((state: RootState) => state.banner.bannerData) as BannerType;
  const { toggleStatus } = useToggle();
  const handleToggle = async () => {
    await toggleStatus(`${import.meta.env.VITE_BANNER_API}/toggle-status`, 1);
  }
  const [isToggled, setIsToggled] = useState(!banner.isVisible);
  const toggleDarkMode = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className={`darkModeBtn ${isToggled ? "" : "dark"}`}>
      <div id="shape" className={`changer ${isToggled ? "" : "change"}`}></div>
      <div
        id="toggle"
        className={`changer ${isToggled ? "" : "change"}`}
        onClick={()=> {handleToggle(); toggleDarkMode();}}
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
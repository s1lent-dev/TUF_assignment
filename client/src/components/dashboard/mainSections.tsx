import Toggle from "./toggle"
import { useState } from "react";
const MainSection = () => {

  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const handleHoursChange = (e) => {
    const value = e.target.value;
    if (value === "" || (Number(value) >= 0 && Number(value) <= 24)) {
      setHours(value);
    }
  };

  const handleMinutesChange = (e) => {
    const value = e.target.value;
    if (value === "" || (Number(value) >= 0 && Number(value) < 60)) {
      setMinutes(value);
    }
  };

  const handleSecondsChange = (e) => {
    const value = e.target.value;
    if (value === "" || (Number(value) >= 0 && Number(value) < 60)) {
      setSeconds(value);
    }
  };

  return (
    <section>
      <div className="toggleBanner">
        <h4>Toggle Banner</h4>
        <Toggle />
      </div>
      <div className="editTitle">
        <h4>Update Banner Title</h4>
        <input type="text" placeholder="update the banner title..." />
        <button>Save</button>
      </div>
      <div className="editDesc">
        <h4>Update Banner Description</h4>
        <input type="text" placeholder="update the banner description..." />
        <button>Save</button>
      </div>
      <div className="editTimer">
        <h4>Update Banner Timer</h4>
        <div className="timeInputs">
          <input
            type="number"
            placeholder="HH"
            value={hours}
            onChange={handleHoursChange}
          />
          <span>:</span>
          <input
            type="number"
            placeholder="MM"
            value={minutes}
            onChange={handleMinutesChange}
          />
          <span>:</span>
          <input
            type="number"
            placeholder="SS"
            value={seconds}
            onChange={handleSecondsChange}
          />
        </div>
        <button>Save</button>
      </div>
      <div className="editLink">
        <h4>Update Banner Link</h4>
        <input type="text" placeholder="update the banner link..." />
        <button>Save</button>
      </div>
    </section>
  )
}

export default MainSection

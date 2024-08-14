import Toggle from "./toggle"
import { useState } from "react";
import { useUpdateDesc, useUpdateTimer, useUpdateLink, useUpdateTitle, useGetBannerById } from "@/utils/apiFeatures";
const MainSection = () => {

  const { fetchBanners } = useGetBannerById();
  const { updateTitle } = useUpdateTitle();
  const { updateDesc } = useUpdateDesc();
  const { updateTimer } = useUpdateTimer();
  const { updateLink } = useUpdateLink();

  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");

  const handleHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || (Number(value) >= 0 && Number(value) <= 24)) {
      setHours(value);
    }
  };

  const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || (Number(value) >= 0 && Number(value) < 60)) {
      setMinutes(value);
    }
  };

  const handleSecondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === "" || (Number(value) >= 0 && Number(value) < 60)) {
      setSeconds(value);
    }
  };

  const updateTitleHandler = () => {
    const title = document.querySelector(".editTitle input") as HTMLInputElement;
    if (title.value) {
      updateTitle(`${import.meta.env.VITE_BANNER_API}/update-title/`, 1,  title.value);
      fetchBanners(`${import.meta.env.VITE_BANNER_API}/get/1`);
    }
  }

  const updateDescHandler = () => {
    const desc = document.querySelector(".editDesc input") as HTMLInputElement;
    if (desc.value) {
      updateDesc(`${import.meta.env.VITE_BANNER_API}/update-description/`, 1, desc.value);
      fetchBanners(`${import.meta.env.VITE_BANNER_API}/get/1`);
    }
  }

  const updateTimerHandler = () => {
    if (hours && minutes && seconds) {
      const timer = `${hours}:${minutes}:${seconds}`;
      updateTimer(`${import.meta.env.VITE_BANNER_API}/update-timer/`, 1, timer);
      fetchBanners(`${import.meta.env.VITE_BANNER_API}/get/1`);
    }
  }

  const updateLinkHandler = () => {
    const link = document.querySelector(".editLink input") as HTMLInputElement;
    if (link.value) {
      updateLink(`${import.meta.env.VITE_BANNER_API}/update-link/`, 1, link.value);
      fetchBanners(`${import.meta.env.VITE_BANNER_API}/get/1`);
    }
  }

  return (
    <section>
      <div className="toggleBanner">
        <h4>Toggle Banner</h4>
        <Toggle />
      </div>
      <div className="editTitle">
        <h4>Update Banner Title</h4>
        <input type="text" placeholder="update the banner title..." />
        <button onClick={updateTitleHandler}>Save</button>
      </div>
      <div className="editDesc">
        <h4>Update Banner Description</h4>
        <input type="text" placeholder="update the banner description..." />
        <button onClick={updateDescHandler}>Save</button>
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
        <button onClick={updateTimerHandler}>Save</button>
      </div>
      <div className="editLink">
        <h4>Update Banner Link</h4>
        <input type="text" placeholder="update the banner link..." />
        <button onClick={updateLinkHandler}>Save</button>
      </div>
    </section>
  )
}

export default MainSection

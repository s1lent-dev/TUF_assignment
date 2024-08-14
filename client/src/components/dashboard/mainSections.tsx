import Toggle from "./toggle";
import { useState } from "react";
import {
  useUpdateDesc,
  useUpdateTimer,
  useUpdateLink,
  useUpdateTitle,
  useGetBannerById,
} from "@/utils/apiFeatures";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainSection = () => {
  const { fetchBanners } = useGetBannerById();
  const { updateTitle } = useUpdateTitle();
  const { updateDesc } = useUpdateDesc();
  const { updateTimer } = useUpdateTimer();
  const { updateLink } = useUpdateLink();

  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [link, setLink] = useState("");

  // Handle input changes and validate the value
  const handleInputChange =
    (
      setter: React.Dispatch<React.SetStateAction<string>>,
      min: number,
      max: number
    ) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const numValue = Number(value);
      if (value === "" || (numValue >= min && numValue <= max)) {
        setter(value);
      }
    };

  const handleHoursChange = handleInputChange(setHours, 0, 24);
  const handleMinutesChange = handleInputChange(setMinutes, 0, 59);
  const handleSecondsChange = handleInputChange(setSeconds, 0, 59);

  // Update handlers
  const updateTitleHandler = async () => {
    if (title) {
      try {
        await updateTitle(
          `${import.meta.env.VITE_BANNER_API}/update-title`,
          1,
          title
        );
        await fetchBanners(`${import.meta.env.VITE_BANNER_API}/get/1`);
        toast.success("Title updated successfully");
      } catch (error) {
        console.error("Failed to update title:", error);
        toast.error("Title updation failed");
      } finally {
        setTitle("");
      }
    }
  };

  const updateDescHandler = async () => {
    if (desc) {
      try {
        await updateDesc(
          `${import.meta.env.VITE_BANNER_API}/update-description`,
          1,
          desc
        );
        await fetchBanners(`${import.meta.env.VITE_BANNER_API}/get/1`);
        toast.success("Description updated successfully");
      } catch (error) {
        console.error("Failed to update description:", error);
        toast.error("Description updation failed");
      } finally {
        setDesc("");
      }
    }
  };

  const updateTimerHandler = async () => {
    if (hours && minutes && seconds) {
      const timer = `${hours}:${minutes}:${seconds}`;
      try {
        await updateTimer(
          `${import.meta.env.VITE_BANNER_API}/update-timer`,
          1,
          timer
        );
        await fetchBanners(`${import.meta.env.VITE_BANNER_API}/get/1`);
        toast.success("Timer updated successfully");
      } catch (error) {
        console.error("Failed to update timer:", error);
        toast.error("Timer updation failed");
      } finally {
        setHours("");
        setMinutes("");
        setSeconds("");
      }
    }
  };

  const updateLinkHandler = async () => {
    if (link) {
      try {
        await updateLink(
          `${import.meta.env.VITE_BANNER_API}/update-link`,
          1,
          link
        );
        await fetchBanners(`${import.meta.env.VITE_BANNER_API}/get/1`);
        toast.success("Link updated successfully");
      } catch (error) {
        console.error("Failed to update link:", error);
        toast.error("Link updation failed");
      } finally {
        setLink("");
      }
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
        <input
          type="text"
          placeholder="Update the banner title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={updateTitleHandler}>Save</button>
      </div>
      <div className="editDesc">
        <h4>Update Banner Description</h4>
        <input
          type="text"
          placeholder="Update the banner description..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
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
        <input
          type="text"
          placeholder="Update the banner link..."
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <button onClick={updateLinkHandler}>Save</button>
      </div>
    </section>
  );
};

export default MainSection;

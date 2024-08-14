import { useSelector } from "react-redux";
import { RootState } from "@/context/store";
import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { BannerType } from "@/types/types";

interface TimerState {
  hours: string;
  minutes: string;
  seconds: string;
}

const Banner = () => {
  const banner = useSelector(
    (state: RootState) => state.banner.bannerData
  ) as BannerType;
  const [timer, setTimer] = useState<TimerState>({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const initializeTimer = useCallback(() => {
    if (banner && banner.timer) {
      const timerArray = banner.timer.split(":");
      setTimer({
        hours: timerArray[0],
        minutes: timerArray[1],
        seconds: timerArray[2],
      });
    }
  }, [banner]);

  useEffect(() => {
    initializeTimer();
  }, [initializeTimer]);

  useEffect(() => {
    const countdown = () => {
      setTimer((prevTimer) => {
        const { hours, minutes, seconds } = prevTimer;

        let hrs = parseInt(hours);
        let mins = parseInt(minutes);
        let secs = parseInt(seconds);

        if (secs > 0) {
          secs--;
        } else if (mins > 0) {
          mins--;
          secs = 59;
        } else if (hrs > 0) {
          hrs--;
          mins = 59;
          secs = 59;
        }

        return {
          hours: hrs.toString().padStart(2, "0"),
          minutes: mins.toString().padStart(2, "0"),
          seconds: secs.toString().padStart(2, "0"),
        };
      });
    };

    const timerId = setInterval(countdown, 1000);
    return () => clearInterval(timerId);
  }, []);

  return (
    <main>
      <div className="banner">
        <div className="bannerHeading">
          <h4>
            Gear Up for <span>Success:</span> Your Ultimate Preparation Hub!
          </h4>
          <p>
            Navigate Your Learning Adventure: Explore DSA, Master CS Concepts,
            Design Systems, Hone Competitive Skills, and Ace Interviews
            Effortlessly
          </p>
        </div>
        {banner.isVisible && (
          <div className="bannerContainer">
            <div className="bannerLeft">
              <div className="logo">
                <img src="/tufplus.svg" alt="" />
              </div>
              <div className="content">
                <h6>{banner.title}</h6>
                <p>{banner.description}</p>
              </div>
            </div>
            <div className="bannerRight">
              <Link to={banner.link}>
                <button>Explore Plus</button>
              </Link>
            </div>
            <div className="timerBoxContainer">
              <div className="timerBox">
                <h4>{timer.hours}</h4> <span>hours</span>
              </div>
              <div className="timerBox">
                <h4>{timer.minutes}</h4> <span>mins</span>
              </div>
              <div className="timerBox">
                <h4>{timer.seconds}</h4> <span>seconds</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Banner;

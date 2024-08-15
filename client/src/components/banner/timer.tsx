import { useEffect, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/context/store";
import { useGetTimerState } from "@/utils/apiFeatures";

interface TimerState {
  hours: string;
  minutes: string;
  seconds: string;
}

const Timer = () => {

  const { fetchTimerState } = useGetTimerState();
  const timerState = useSelector(
    (state: RootState) => state.banner.timerState
  ) as TimerState;
  const [timer, setTimer] = useState<TimerState>({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const fetchInitialTimer = useCallback(async () => {
    try {
      await fetchTimerState(`${import.meta.env.VITE_BANNER_API}/get-timer`);
    } catch (error) {
      console.error("Failed to fetch timer state:", error);
    }
  }, [fetchTimerState]);

  useEffect(() => {
    fetchInitialTimer();
  }, [fetchInitialTimer]);

  const initializeTimer = useCallback(() => {
    if (timerState) {
      setTimer(timerState);
    }
  }, [timerState]);

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

    const newTimer = setInterval(countdown, 1000);
    return () => clearInterval(newTimer);
  }, []);


  return (
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
  );
};

export default Timer;

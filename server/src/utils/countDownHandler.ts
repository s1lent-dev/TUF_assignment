import { TimerState } from "../types/types.js";


let timerState: TimerState = {
  hours: "00",
  minutes: "00",
  seconds: "00",
};
const startCountDown = (timer: TimerState) => {

  let newTimer: TimerState = timer;
  const countDownHandler = () => {

    let { hours, minutes, seconds } = newTimer;
  
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
  };
  
  
  if(newTimer.hours !== "00" || newTimer.minutes !== "00" || newTimer.seconds !== "00") {
    setInterval(() => {
      newTimer = countDownHandler();
      timerState = newTimer;
    }, 1000);
  }
}
export { startCountDown, timerState };

import { asyncHandler } from "../utils/asyncHandler.js";
import { startCountDown } from "../utils/countDownHandler.js";
const setInitialTimerState = asyncHandler(async (req, res, next) => {
    const { timer } = req.body;
    const timerArray = timer.split(":");
    const newTimer = {
        hours: timerArray[0],
        minutes: timerArray[1],
        seconds: timerArray[2],
    };
    req.timerState = newTimer;
    startCountDown(newTimer);
    next();
});
export { setInitialTimerState };

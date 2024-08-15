import { NextFunction, Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.js";
import { CustomRequest } from "../types/types.js";
import { startCountDown } from "../utils/countDownHandler.js";

const setInitialTimerState = asyncHandler(async (req: CustomRequest, res: Response, next: NextFunction) => {
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
import { NextFunction, Request, Response } from "express";


//Interfaces 
interface Banner {
  bannerId: number;
  title: string;
  description: string;
  timer: number;
  link: string;
  isVisible: boolean;
}
//Types
type ControllerType = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void | Response<any, Record<string, any>>>;


interface CustomRequest extends Request {
  timerState?: {
    hours: string;
    minutes: string;
    seconds: string;
  };
}

interface TimerState {
  hours: string;
  minutes: string;
  seconds: string;
}

export { ControllerType, Banner, CustomRequest, TimerState };
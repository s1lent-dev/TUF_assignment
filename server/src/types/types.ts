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


export { ControllerType, Banner };
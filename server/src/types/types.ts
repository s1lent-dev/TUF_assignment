import { NextFunction, Request, Response } from "express";


//Interfaces 

//Types
type ControllerType = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void | Response<any, Record<string, any>>>;


export { ControllerType };
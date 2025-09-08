import { Request,Response } from "express";

export const pingHandler = (req:Request,res:Response) => {
      res.status(200).json({
        message:"Pong",
      });
}

export const pingPostHandler = (req:Request, res:Response) => {
    res.status(200).json({
    message:"Pong from POST",
  })
}
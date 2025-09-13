import { Request,Response,NextFunction } from "express";
import { createUserService } from "../services/user.service";

export const userSignupHandler = async(req:Request,res:Response,next:NextFunction)=>{
    const newUser = await createUserService(req.body);
    res.status(200).json({
        newUser
    })
}
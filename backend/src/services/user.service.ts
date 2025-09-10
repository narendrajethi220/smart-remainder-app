import { logger } from "../config/logger.config";
import { userSignupDTO } from "../dto/userSignup.dto";
import { createUser } from "../repositories/user.repository";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import { InternalServerError, InvalidBodyRequest } from "../utils/app.error";
import prismaClient from '../prisma/client';

export async function createUserService (userSignupInput:userSignupDTO){
    try{
       const {name,email,password,timezone} = userSignupInput;
       const emailLowerCase = email.toLowerCase();
       const emailExists = await prismaClient.user.findUnique({
         where:{
            email:emailLowerCase
        }
       })
       if(emailExists){
          throw new InvalidBodyRequest("Email Already Exists!");
       }
       const salt = await bcrypt.genSalt(10);
       const hashedPassword = bcrypt.hashSync(password,salt);
       const newUser = await createUser({
        name, 
        email:emailLowerCase,
        password:hashedPassword,
        timezone:timezone,
       })
       return newUser;
    }
    catch(err){
        logger.error("Error while create User",err);
        throw InternalServerError;
    }
}
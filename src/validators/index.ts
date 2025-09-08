import { ZodObject } from "zod"
import { Request,Response,NextFunction } from "express"
import { logger } from "../config/logger.config"
import { InvalidBodyRequest } from "../utils/app.error"

export const validateRequestBody = (schema: ZodObject) => {
      return async (req:Request, res:Response, next:NextFunction) => {
         try{
              await schema.parseAsync(req.body);
              logger.info("Request Body is valid");
              next();
         }
         catch(err){
            logger.error("Invalid Request Body");
            throw new InvalidBodyRequest("Invalid Request Body");
         }
      }
}
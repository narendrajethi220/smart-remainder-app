import { Request, Response, NextFunction } from "express"
import {v4 as uuidv4} from 'uuid';
import { asyncLoaclStorage } from "../utils/request.helper";

export const attachCorrelationId=(req:Request, res:Response, next:NextFunction) => {
    const correlationId = uuidv4();
    
    asyncLoaclStorage.run({ correlationId:correlationId}, () => {
        next();
    })
}
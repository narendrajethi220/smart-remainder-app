import { Prisma } from "@prisma/client";
import prismaClient from '../prisma/client';
import { logger } from "../config/logger.config";

export async function createUser(userInput:Prisma.UserCreateInput){
    const newUser = await prismaClient.user.create({
        data:userInput,
        select:{
            id:true,
            name:true,
            email:true,
            timezone:true,
            createdAt:true,
        }
    })
    logger.info(`User created: ${newUser.id}`);
    return newUser;
}
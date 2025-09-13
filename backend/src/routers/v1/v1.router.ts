import express from 'express';
import { pingHandler, pingPostHandler } from '../../controllers/ping.controller';
import { validateRequestBody } from '../../validators';
import { pingSchema } from '../../validators/ping.validator';
import userRouter from './user.router';
const v1Router = express.Router();

v1Router.get("/ping",pingHandler);
v1Router.post("/ping",validateRequestBody(pingSchema),pingPostHandler);
v1Router.use('/',userRouter);

export default v1Router;
import express from 'express';
import { userSignupHandler } from '../../controllers/user.controller';
import { validateRequestBody } from '../../validators';
import { userSignupSchema } from '../../validators/userSignup.validators';

const userRouter = express.Router();

userRouter.post('/signup',validateRequestBody(userSignupSchema),userSignupHandler);

export default userRouter;
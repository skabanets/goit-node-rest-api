import express from "express";
import usersControllers from "../controllers/usersControllers.js";

import { validateBody } from "../middlewares/validateBody.js";
import { userSigninSchema, userSignupSchema } from "../schemas/usersSchemas.js";

export const usersRouter = express.Router();

usersRouter.post(
  "/register",
  validateBody(userSignupSchema),
  usersControllers.register
);

usersRouter.post(
  "/login",
  validateBody(userSigninSchema),
  usersControllers.login
);

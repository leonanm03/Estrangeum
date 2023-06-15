import { Router } from "express";

import { createUserSchema } from "@/schemas";
import { validateBody } from "@/middlewares";
import { postUser } from "@/controllers";

const userRouter = Router();

userRouter.post("/create", validateBody(createUserSchema), postUser);

export default userRouter;

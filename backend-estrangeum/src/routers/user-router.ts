import { Router } from "express";

import { createUserSchema } from "@/schemas";
import { validateBody } from "@/middlewares";
import { postUser } from "@/controllers";

let userRouter = Router();

userRouter.post("/create", validateBody(createUserSchema), postUser);

export { userRouter };

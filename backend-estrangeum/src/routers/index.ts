import { Router } from "express";

import authenticationRouter from "./authentication-router";
import userRouter from "./user-router";

const routes = Router();

routes
  .get("/health", (_req, res) => res.send("OK"))
  .use("/auth", authenticationRouter)
  .use("/user", userRouter);

export default routes;

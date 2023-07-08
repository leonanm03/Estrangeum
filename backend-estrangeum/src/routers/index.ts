import { Router } from "express";

import authenticationRouter from "./authentication-router";
import userRouter from "./user-router";
import objectRouter from "./object-router";
import subscriptionRouter from "./subscription-router";

const routes = Router();

routes
  .get("/health", (_req, res) => res.send("OK"))
  .use("/auth", authenticationRouter)
  .use("/user", userRouter)
  .use("/object", objectRouter)
  .use("/subscription", subscriptionRouter);

export default routes;

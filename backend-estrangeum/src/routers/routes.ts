import { Router } from "express";

import { userRouter } from "./user-router";

export let routes = Router();

routes.get("/health", (_req, res) => res.send("OK")).use("/user", userRouter);

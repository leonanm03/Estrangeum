import { getObjectsWithImage, getUniqueObject } from "@/controllers";
import { Router } from "express";

const objectRouter = Router();

objectRouter.get("/all", getObjectsWithImage).get("/:id", getUniqueObject);

export default objectRouter;

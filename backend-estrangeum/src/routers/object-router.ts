import { getObjectsWithImage } from "@/controllers/object-controller";
import { Router } from "express";

const objectRouter = Router();

objectRouter.get("/all", getObjectsWithImage);

export default objectRouter;

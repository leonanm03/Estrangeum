import { objectService } from "@/services/object-service";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export async function getObjectsWithImage(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const objects = await objectService.findManyObjectsWithImage();
    return res.status(httpStatus.OK).send(objects);
  } catch (error) {
    next(error);
  }
}

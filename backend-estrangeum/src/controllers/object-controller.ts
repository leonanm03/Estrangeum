import { objectService } from "@/services";
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

export async function getUniqueObject(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  try {
    const object = await objectService.findUniqueObject({ id: parseInt(id) });
    return res.status(httpStatus.OK).send(object);
  } catch (error) {
    next(error);
  }
}

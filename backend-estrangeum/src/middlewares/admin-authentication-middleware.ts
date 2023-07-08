import { NextFunction, Response } from "express";
import httpStatus from "http-status";

import { unauthorizedError } from "@/errors";
import { prisma } from "@/config";
import { AuthenticatedRequest } from "./authentication-middleware";

export async function authenticateAdmin(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  try {
    const { user_id } = req;

    const user = await prisma.user.findUnique({
      where: {
        id: user_id,
      },
    });

    if (!user || user.type !== "ADMIN")
      return generateUnauthorizedResponse(res);

    return next();
  } catch (err) {
    return generateUnauthorizedResponse(res);
  }
}

function generateUnauthorizedResponse(res: Response) {
  res.status(httpStatus.UNAUTHORIZED).send(unauthorizedError());
}

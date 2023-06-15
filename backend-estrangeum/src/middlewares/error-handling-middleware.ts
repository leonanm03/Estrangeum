import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

import { ApplicationError } from "@/protocols";

export function handleApplicationErrors(
  err: ApplicationError | Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  switch (err.name) {
    case "InvalidDataError":
      return res.status(httpStatus.BAD_REQUEST).send({
        error: err.name,
        message: err.message,
        details: (err as any).details,
      });

    case "ConflictError":
      return res.status(httpStatus.CONFLICT).send({
        error: err.name,
        message: err.message,
      });

    case "InvalidCredentialsError":
      return res.status(httpStatus.UNAUTHORIZED).send({
        error: err.name,
        message: err.message,
      });

    default:
      return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
        error: "InternalServerError",
        message: "Internal Server Error",
      });
  }
}

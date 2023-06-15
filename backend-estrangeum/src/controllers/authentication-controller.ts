import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { SignInParams, authenticationService } from "@/services";

export async function singInPost(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { email, password } = req.body as SignInParams;

  try {
    const result = await authenticationService.signIn({ email, password });

    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    next(error);
  }
}

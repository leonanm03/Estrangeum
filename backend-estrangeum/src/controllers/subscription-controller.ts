import { AuthenticatedRequest } from "@/middlewares";
import { SubscriptionCreateInput } from "@/repositories";
import { subscriptionService } from "@/services";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

export async function getPendingSubscriptions(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const objects = await subscriptionService.findPendingWithImages();
    return res.status(httpStatus.OK).send(objects);
  } catch (error) {
    next(error);
  }
}

export async function createSubscription(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const { user_id } = req;
  const body = req.body as SubscriptionCreateInput;
  try {
    const subscription = await subscriptionService.createSubscription({
      ...body,
      user_id,
    });
    return res.status(httpStatus.CREATED).send(subscription);
  } catch (error) {
    next(error);
  }
}

export async function findSubscriptionById(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const { user_id } = req;
  const id = parseInt(req.params.id);
  try {
    const subscription = await subscriptionService.findByIdWithImages(
      id,
      user_id
    );
    return res.status(httpStatus.OK).send(subscription);
  } catch (error) {
    next(error);
  }
}

export async function approveSubscription(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const id = parseInt(req.params.id);
  try {
    await subscriptionService.approveSubscription(id);
    return res.status(httpStatus.OK).send();
  } catch (error) {
    next(error);
  }
}

export async function rejectSubscription(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const id = parseInt(req.params.id);
  try {
    await subscriptionService.rejectSubscription(id);
    return res.status(httpStatus.OK).send();
  } catch (error) {
    next(error);
  }
}

export async function findUserSubscriptions(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  const { user_id } = req;
  try {
    const subscriptions =
      await subscriptionService.findUserSubscriptionsWithImages(user_id);
    return res.status(httpStatus.OK).send(subscriptions);
  } catch (error) {
    next(error);
  }
}

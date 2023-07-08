import {
  approveSubscription,
  createSubscription,
  findSubscriptionById,
  findUserSubscriptions,
  getPendingSubscriptions,
  rejectSubscription,
} from "@/controllers";
import {
  authenticateAdmin,
  authenticateToken,
  validateBody,
  validateParams,
} from "@/middlewares";
import {
  SubscriptionIdParamSchema,
  SubscriptionPostSchema,
} from "@/schemas/subscription-schemas";
import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter
  .all("*", authenticateToken)
  .post("/", validateBody(SubscriptionPostSchema), createSubscription)
  .get("/:id", validateParams(SubscriptionIdParamSchema), findSubscriptionById)
  .get("/my-items", findUserSubscriptions)
  .all("*", authenticateAdmin)
  .get("/pending", getPendingSubscriptions)
  .post(
    "/approve/:id",
    validateParams(SubscriptionIdParamSchema),
    approveSubscription
  )
  .put(
    "/reject/:id",
    validateParams(SubscriptionIdParamSchema),
    rejectSubscription
  );
export default subscriptionRouter;

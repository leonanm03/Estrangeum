import { SubscriptionCreateInput } from "@/repositories";
import Joi from "joi";

export const SubscriptionIdParamSchema = Joi.object<{ id: string }>({
  id: Joi.string()
    .regex(/^[0-9]+$/)
    .required(),
});

export const SubscriptionPostSchema = Joi.object<SubscriptionCreateInput>({
  name: Joi.string().min(2).required(),
  description: Joi.string().min(2).required(),
  category: Joi.string()
    .valid("HAUNTED", "ALIEN", "MYSTERY", "MAGIC")
    .required(),
  SubscriptionImage: Joi.array().items(Joi.string().uri()).min(3).required(),
});

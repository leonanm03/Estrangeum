import { ObjectCreateInput } from "@/repositories";
import Joi from "joi";

export const SubscriptionIdParamSchema = Joi.object<{ id: string }>({
  id: Joi.string()
    .regex(/^[0-9]+$/)
    .required(),
});

export const SubscriptionPostSchema = Joi.object<ObjectCreateInput>({
  name: Joi.string().min(2).required(),
  description: Joi.string().min(2).required(),
  category: Joi.string()
    .valid("HAUNTED", "ALIEN", "MYSTERY", "MAGIC")
    .required(),
  ObjectImage: Joi.array().items(Joi.string().uri()),
});

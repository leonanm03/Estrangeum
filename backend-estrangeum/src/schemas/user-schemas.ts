import Joi from "joi";
import { CreateUserParams } from "@/services";

export const createUserSchema = Joi.object<CreateUserParams>({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image_url: Joi.string().uri().optional(),
});

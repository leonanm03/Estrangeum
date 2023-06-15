import Joi from "joi";
import { CreateUserParams } from "@/repositories";

export const createUserSchema = Joi.object<CreateUserParams>({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

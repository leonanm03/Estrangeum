import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "@prisma/client";

import { invalidCredentialsError } from "@/errors";
import { exclude } from "@/utils";
import { sessionRepository, userRepository } from "@/repositories";

async function signIn(params: SignInParams): Promise<SignInResult> {
  const { email, password } = params;

  const user = await getUserOrFail(email);

  await validatePasswordOrFail(password, user.password);

  const token = await createSession(user.id);

  return {
    user: exclude(user, "password"),
    token,
  };
}

async function getUserOrFail(email: string): Promise<GetUserOrFailResult> {
  const user = await userRepository.findByEmail(email, {
    id: true,
    email: true,
    password: true,
    name: true,
    image_url: true,
  });
  if (!user) throw invalidCredentialsError();

  return user;
}

async function createSession(user_id: number) {
  const token = jwt.sign({ user_id }, process.env.JWT_SECRET);
  await sessionRepository.create({
    token,
    user_id,
  });

  return token;
}

async function validatePasswordOrFail(password: string, userPassword: string) {
  const isPasswordValid = await bcrypt.compare(password, userPassword);
  if (!isPasswordValid) throw invalidCredentialsError();
}

export type SignInParams = Pick<User, "email" | "password">;

type SignInResult = {
  user: Pick<User, "id" | "email" | "image_url" | "name">;
  token: string;
};

type GetUserOrFailResult = Pick<
  User,
  "id" | "email" | "password" | "name" | "image_url"
>;

export const authenticationService = {
  signIn,
};

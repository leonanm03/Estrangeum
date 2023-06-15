import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import { conflictError } from "@/errors";
import { CreateUserParams, userRepository } from "@/repositories";

async function createUser({
  name,
  email,
  password,
}: CreateUserParams): Promise<User> {
  await validateUniqueEmailOrFail(email);

  const hashedPassword = await bcrypt.hash(password, 12);
  return await userRepository.create({
    name,
    email,
    password: hashedPassword,
  });
}

async function validateUniqueEmailOrFail(email: string) {
  const userWithSameEmail = await userRepository.findByEmail(email);
  if (userWithSameEmail) {
    throw conflictError("Email already in use");
  }
}

export const userService = {
  createUser,
};

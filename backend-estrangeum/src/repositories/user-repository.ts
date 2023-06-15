import { User } from "@prisma/client";

import { prisma } from "@/config";

async function create(data: CreateUserParams): Promise<User> {
  return prisma.user.create({
    data,
  });
}

async function findByEmail(email: string): Promise<User | null> {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}

export type CreateUserParams = Pick<User, "name" | "email" | "password">;

export const userRepository = {
  create,
  findByEmail,
};

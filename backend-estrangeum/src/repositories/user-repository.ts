import { Prisma, UserType } from "@prisma/client";
import { prisma } from "@/config";
import { User } from "@prisma/client";

async function create(
  data: Prisma.UserUncheckedCreateInput,
  type?: UserType
): Promise<User> {
  return prisma.user.create({
    data: {
      ...data,
      type: type || "USER",
    },
  });
}

async function findById(id: number, select?: Prisma.UserSelect) {
  const params: Prisma.UserFindUniqueArgs = {
    where: {
      id,
    },
  };

  if (select) {
    params.select = select;
  }

  return prisma.user.findUnique(params);
}

async function findByEmail(email: string, select?: Prisma.UserSelect) {
  const params: Prisma.UserFindUniqueArgs = {
    where: {
      email,
    },
  };

  if (select) {
    params.select = select;
  }

  return prisma.user.findUnique(params);
}

export const userRepository = {
  create,
  findByEmail,
  findById,
};

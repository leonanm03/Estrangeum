import { Prisma } from "@prisma/client";
import { prisma } from "@/config";
import { User } from "@prisma/client";

async function create(data: Prisma.UserUncheckedCreateInput): Promise<User> {
  return prisma.user.create({
    data,
  });
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
};

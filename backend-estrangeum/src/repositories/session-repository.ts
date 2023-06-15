import { Prisma, Session } from "@prisma/client";
import { prisma } from "@/config";

async function create(
  data: Prisma.SessionUncheckedCreateInput
): Promise<Session> {
  return prisma.session.create({
    data,
  });
}

export const sessionRepository = {
  create,
};

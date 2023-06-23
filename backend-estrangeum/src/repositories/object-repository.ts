import { prisma } from "@/config";
import { Object, Prisma } from "@prisma/client";

export function create(
  data: Prisma.ObjectUncheckedCreateInput
): Promise<Object> {
  return prisma.object.create({
    data,
  });
}

export function findMany(): Promise<Object[]> {
  return prisma.object.findMany();
}

export function findUnique(
  id: Prisma.ObjectWhereUniqueInput
): Promise<Object | null> {
  return prisma.object.findUnique({
    where: id,
  });
}

export function update(
  id: Prisma.ObjectWhereUniqueInput,
  data: Prisma.ObjectUncheckedUpdateInput
): Promise<Object> {
  return prisma.object.update({
    where: id,
    data,
  });
}

export const objectRepository = {
  create,
  findMany,
  findUnique,
  update,
};

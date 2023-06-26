import { prisma } from "@/config";
import { Object, ObjectImage, Prisma } from "@prisma/client";

export function create(
  data: Prisma.ObjectUncheckedCreateInput
): Promise<Object> {
  return prisma.object.create({
    data,
  });
}

export function findManyWithImage(): Promise<ObjectsWithImageResult[]> {
  return prisma.object.findMany({
    select: {
      id: true,
      name: true,
      category: true,
      ObjectImage: true,
    },
  });
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

type ObjectsWithImageResult = {
  id: number;
  name: string;
  ObjectImage: ObjectImage[];
};

export const objectRepository = {
  create,
  findManyWithImage,
  findUnique,
  update,
};

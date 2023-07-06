import { prisma } from "@/config";
import { Object, ObjectImage, Prisma } from "@prisma/client";

export function create(data: ObjectCreateInput): Promise<Object> {
  return prisma.object.create({
    data: {
      ...data,
      ObjectImage: {
        create: data.ObjectImage.map((image) => ({ image_url: image })),
      },
    },
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

export function findUniqueWithImage(
  id: Prisma.ObjectWhereUniqueInput
): Promise<Object | null> {
  return prisma.object.findUnique({
    where: id,
    include: { ObjectImage: true },
  });
}

export type ObjectCreateInput = {
  name: string;
  description: string;
  category: "ALIEN" | "MAGIC" | "HAUNTED" | "MYSTERY";
  ObjectImage: string[];
};

type ObjectsWithImageResult = {
  id: number;
  name: string;
  ObjectImage: ObjectImage[];
};

export const objectRepository = {
  create,
  findManyWithImage,
  findUniqueWithImage,
};

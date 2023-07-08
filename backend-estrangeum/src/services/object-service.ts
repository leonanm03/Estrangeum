import { ObjectCreateInput, objectRepository } from "@/repositories";
import { randomizeArray } from "@/utils";
import { Object, Prisma } from "@prisma/client";

async function createObject(data: ObjectCreateInput): Promise<Object> {
  return await objectRepository.create(data);
}

async function findManyObjectsWithImage() {
  const result = await objectRepository.findManyWithImage();
  return randomizeArray(result);
}

async function findUniqueObject(
  id: Prisma.ObjectWhereUniqueInput
): Promise<Object | null> {
  return await objectRepository.findUniqueWithImage(id);
}

export const objectService = {
  createObject,
  findManyObjectsWithImage,
  findUniqueObject,
};

import { objectRepository } from "@/repositories";
import { randomizeArray } from "@/utils";
import { Object, Prisma } from "@prisma/client";

async function createObject(data: CreateObjectParams): Promise<Object> {
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

async function updateObject(
  id: Prisma.ObjectWhereUniqueInput,
  data: Prisma.ObjectUncheckedUpdateInput
): Promise<Object> {
  return await objectRepository.update(id, data);
}

export type CreateObjectParams = Prisma.ObjectCreateInput;
export type UpdateObjectParams = Prisma.ObjectUncheckedUpdateInput;

export const objectService = {
  createObject,
  findManyObjectsWithImage,
  findUniqueObject,
  updateObject,
};

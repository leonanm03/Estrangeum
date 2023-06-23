import { objectRepository } from "@/repositories";
import { Object, Prisma } from "@prisma/client";

async function createObject(data: CreateObjectParams): Promise<Object> {
  return await objectRepository.create(data);
}

async function findManyObjects(): Promise<Object[]> {
  return await objectRepository.findMany();
}

async function findUniqueObject(
  id: Prisma.ObjectWhereUniqueInput
): Promise<Object | null> {
  return await objectRepository.findUnique(id);
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
  findManyObjects,
  findUniqueObject,
  updateObject,
};

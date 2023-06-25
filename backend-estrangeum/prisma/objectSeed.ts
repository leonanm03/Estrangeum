import { PrismaClient } from "@prisma/client";
import { objects } from "./utils/objects";

const prisma = new PrismaClient();

export default async function objectSeed() {
  objects.forEach(async (object) => {
    const { name, category, description, ObjectImage } = object;
    await prisma.object.create({
      data: {
        name,
        category,
        description,
        ObjectImage: {
          create: ObjectImage.map((image) => ({ image_url: image })),
        },
      },
    });
  });

  return await prisma.object.findMany();
}

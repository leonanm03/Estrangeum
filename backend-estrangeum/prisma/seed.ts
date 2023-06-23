import { PrismaClient } from "@prisma/client";
import objectSeed from "./objectSeed";

const prisma = new PrismaClient();

async function main() {
  const objects = await objectSeed();
  console.log(objects);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export default prisma;

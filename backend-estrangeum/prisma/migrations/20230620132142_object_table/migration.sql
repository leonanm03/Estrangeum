-- CreateEnum
CREATE TYPE "Category" AS ENUM ('ALIEN', 'MYSTERY', 'HAUNTED', 'OTHER');

-- CreateTable
CREATE TABLE "Object" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "category" "Category" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Object_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ObjectImage" (
    "id" SERIAL NOT NULL,
    "object_id" INTEGER NOT NULL,
    "image_url" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ObjectImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ObjectImage" ADD CONSTRAINT "ObjectImage_object_id_fkey" FOREIGN KEY ("object_id") REFERENCES "Object"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

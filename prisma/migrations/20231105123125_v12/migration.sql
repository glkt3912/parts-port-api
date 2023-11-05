/*
  Warnings:

  - You are about to drop the column `cpucoolerId` on the `PartsList` table. All the data in the column will be lost.
  - You are about to drop the `CpuCooler` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CpuCooler" DROP CONSTRAINT "CpuCooler_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "PartsList" DROP CONSTRAINT "PartsList_cpucoolerId_fkey";

-- AlterTable
ALTER TABLE "PartsList" DROP COLUMN "cpucoolerId",
ADD COLUMN     "CoolerId" INTEGER;

-- DropTable
DROP TABLE "CpuCooler";

-- CreateTable
CREATE TABLE "Cooler" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "intel" TEXT NOT NULL,
    "amd" TEXT NOT NULL,
    "flowtype" TEXT NOT NULL,
    "noise" TEXT NOT NULL,
    "partNumber" TEXT NOT NULL,
    "image" TEXT,
    "url" VARCHAR(2048),
    "price" TEXT,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "Cooler_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PartsList" ADD CONSTRAINT "PartsList_CoolerId_fkey" FOREIGN KEY ("CoolerId") REFERENCES "Cooler"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cooler" ADD CONSTRAINT "Cooler_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

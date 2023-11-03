/*
  Warnings:

  - You are about to drop the column `monitortype` on the `Display` table. All the data in the column will be lost.
  - You are about to drop the column `videocardId` on the `PartsList` table. All the data in the column will be lost.
  - You are about to drop the `VideoCard` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `resolution` to the `Display` table without a default value. This is not possible if the table is not empty.
  - Added the required column `speed` to the `Display` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Display` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PartsList" DROP CONSTRAINT "PartsList_videocardId_fkey";

-- DropForeignKey
ALTER TABLE "VideoCard" DROP CONSTRAINT "VideoCard_categoryId_fkey";

-- AlterTable
ALTER TABLE "Cpu" ADD COLUMN     "price" TEXT,
ADD COLUMN     "url" VARCHAR(2048);

-- AlterTable
ALTER TABLE "CpuCooler" ADD COLUMN     "price" TEXT,
ADD COLUMN     "url" VARCHAR(2048);

-- AlterTable
ALTER TABLE "Display" DROP COLUMN "monitortype",
ADD COLUMN     "price" TEXT,
ADD COLUMN     "resolution" TEXT NOT NULL,
ADD COLUMN     "speed" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL,
ADD COLUMN     "url" VARCHAR(2048);

-- AlterTable
ALTER TABLE "Hdd" ADD COLUMN     "price" TEXT,
ADD COLUMN     "url" VARCHAR(2048);

-- AlterTable
ALTER TABLE "Memory" ADD COLUMN     "url" VARCHAR(2048);

-- AlterTable
ALTER TABLE "MotherBoard" ADD COLUMN     "price" TEXT,
ADD COLUMN     "url" VARCHAR(2048);

-- AlterTable
ALTER TABLE "PartsList" DROP COLUMN "videocardId",
ADD COLUMN     "gpuId" INTEGER;

-- AlterTable
ALTER TABLE "PcCase" ADD COLUMN     "price" TEXT,
ADD COLUMN     "url" VARCHAR(2048);

-- AlterTable
ALTER TABLE "Power" ADD COLUMN     "price" TEXT,
ADD COLUMN     "url" VARCHAR(2048);

-- AlterTable
ALTER TABLE "Ssd" ADD COLUMN     "price" TEXT,
ADD COLUMN     "url" VARCHAR(2048);

-- DropTable
DROP TABLE "VideoCard";

-- CreateTable
CREATE TABLE "Gpu" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "brand" TEXT NOT NULL,
    "chip" TEXT NOT NULL,
    "core" TEXT NOT NULL,
    "memory" TEXT NOT NULL,
    "clock" TEXT NOT NULL,
    "interface" TEXT NOT NULL,
    "itemValue" TEXT NOT NULL,
    "image" TEXT,
    "url" VARCHAR(2048),
    "price" TEXT,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "Gpu_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PartsList" ADD CONSTRAINT "PartsList_gpuId_fkey" FOREIGN KEY ("gpuId") REFERENCES "Gpu"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Gpu" ADD CONSTRAINT "Gpu_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

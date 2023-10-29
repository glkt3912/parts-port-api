/*
  Warnings:

  - You are about to drop the column `pcpartId` on the `Cpu` table. All the data in the column will be lost.
  - You are about to drop the column `pcpartId` on the `CpuCooler` table. All the data in the column will be lost.
  - You are about to drop the column `pcpartId` on the `Display` table. All the data in the column will be lost.
  - You are about to drop the column `pcpartId` on the `Hdd` table. All the data in the column will be lost.
  - You are about to drop the column `pcpartId` on the `Memory` table. All the data in the column will be lost.
  - You are about to drop the column `pcpartId` on the `MotherBoard` table. All the data in the column will be lost.
  - You are about to drop the column `pcpartId` on the `PcCase` table. All the data in the column will be lost.
  - You are about to drop the column `pcpartId` on the `Power` table. All the data in the column will be lost.
  - You are about to drop the column `pcpartId` on the `Ssd` table. All the data in the column will be lost.
  - You are about to drop the column `pcpartId` on the `VideoCard` table. All the data in the column will be lost.
  - You are about to drop the `PcPart` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoryId` to the `Cpu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `CpuCooler` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `Display` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `Hdd` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `Memory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `MotherBoard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `PcCase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `Power` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `Ssd` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categoryId` to the `VideoCard` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Cpu" DROP CONSTRAINT "Cpu_pcpartId_fkey";

-- DropForeignKey
ALTER TABLE "CpuCooler" DROP CONSTRAINT "CpuCooler_pcpartId_fkey";

-- DropForeignKey
ALTER TABLE "Display" DROP CONSTRAINT "Display_pcpartId_fkey";

-- DropForeignKey
ALTER TABLE "Hdd" DROP CONSTRAINT "Hdd_pcpartId_fkey";

-- DropForeignKey
ALTER TABLE "Memory" DROP CONSTRAINT "Memory_pcpartId_fkey";

-- DropForeignKey
ALTER TABLE "MotherBoard" DROP CONSTRAINT "MotherBoard_pcpartId_fkey";

-- DropForeignKey
ALTER TABLE "PcCase" DROP CONSTRAINT "PcCase_pcpartId_fkey";

-- DropForeignKey
ALTER TABLE "Power" DROP CONSTRAINT "Power_pcpartId_fkey";

-- DropForeignKey
ALTER TABLE "Ssd" DROP CONSTRAINT "Ssd_pcpartId_fkey";

-- DropForeignKey
ALTER TABLE "VideoCard" DROP CONSTRAINT "VideoCard_pcpartId_fkey";

-- AlterTable
ALTER TABLE "Cpu" DROP COLUMN "pcpartId",
ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "CpuCooler" DROP COLUMN "pcpartId",
ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Display" DROP COLUMN "pcpartId",
ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Hdd" DROP COLUMN "pcpartId",
ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Memory" DROP COLUMN "pcpartId",
ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "MotherBoard" DROP COLUMN "pcpartId",
ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "PcCase" DROP COLUMN "pcpartId",
ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Power" DROP COLUMN "pcpartId",
ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Ssd" DROP COLUMN "pcpartId",
ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "VideoCard" DROP COLUMN "pcpartId",
ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "PcPart";

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cpu" ADD CONSTRAINT "Cpu_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MotherBoard" ADD CONSTRAINT "MotherBoard_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Memory" ADD CONSTRAINT "Memory_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Hdd" ADD CONSTRAINT "Hdd_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ssd" ADD CONSTRAINT "Ssd_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VideoCard" ADD CONSTRAINT "VideoCard_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Power" ADD CONSTRAINT "Power_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PcCase" ADD CONSTRAINT "PcCase_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CpuCooler" ADD CONSTRAINT "CpuCooler_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Display" ADD CONSTRAINT "Display_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `partNumber` on the `Cooler` table. All the data in the column will be lost.
  - You are about to drop the column `partNumber` on the `Cpu` table. All the data in the column will be lost.
  - You are about to drop the column `partNumber` on the `Display` table. All the data in the column will be lost.
  - You are about to drop the column `partNumber` on the `Gpu` table. All the data in the column will be lost.
  - You are about to drop the column `partNumber` on the `Hdd` table. All the data in the column will be lost.
  - You are about to drop the column `partNumber` on the `Memory` table. All the data in the column will be lost.
  - You are about to drop the column `partNumber` on the `MotherBoard` table. All the data in the column will be lost.
  - You are about to drop the column `partNumber` on the `PcCase` table. All the data in the column will be lost.
  - You are about to drop the column `partNumber` on the `Power` table. All the data in the column will be lost.
  - You are about to drop the column `partNumber` on the `Ssd` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Cooler" DROP COLUMN "partNumber";

-- AlterTable
ALTER TABLE "Cpu" DROP COLUMN "partNumber";

-- AlterTable
ALTER TABLE "Display" DROP COLUMN "partNumber";

-- AlterTable
ALTER TABLE "Gpu" DROP COLUMN "partNumber";

-- AlterTable
ALTER TABLE "Hdd" DROP COLUMN "partNumber";

-- AlterTable
ALTER TABLE "Memory" DROP COLUMN "partNumber";

-- AlterTable
ALTER TABLE "MotherBoard" DROP COLUMN "partNumber";

-- AlterTable
ALTER TABLE "PcCase" DROP COLUMN "partNumber";

-- AlterTable
ALTER TABLE "Power" DROP COLUMN "partNumber";

-- AlterTable
ALTER TABLE "Ssd" DROP COLUMN "partNumber";

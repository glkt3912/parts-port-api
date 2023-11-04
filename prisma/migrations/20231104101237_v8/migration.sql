/*
  Warnings:

  - You are about to drop the column `itemValue` on the `Cpu` table. All the data in the column will be lost.
  - You are about to drop the column `itemValue` on the `CpuCooler` table. All the data in the column will be lost.
  - You are about to drop the column `itemValue` on the `Display` table. All the data in the column will be lost.
  - You are about to drop the column `itemValue` on the `Gpu` table. All the data in the column will be lost.
  - You are about to drop the column `interface1` on the `Hdd` table. All the data in the column will be lost.
  - You are about to drop the column `interface2` on the `Hdd` table. All the data in the column will be lost.
  - You are about to drop the column `itemValue` on the `Hdd` table. All the data in the column will be lost.
  - You are about to drop the column `itemValue` on the `Memory` table. All the data in the column will be lost.
  - You are about to drop the column `itemValue` on the `MotherBoard` table. All the data in the column will be lost.
  - You are about to drop the column `itemValue` on the `PcCase` table. All the data in the column will be lost.
  - You are about to drop the column `itemValue` on the `Power` table. All the data in the column will be lost.
  - You are about to drop the column `itemValue` on the `Ssd` table. All the data in the column will be lost.
  - Added the required column `partNumber` to the `Cpu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `partNumber` to the `CpuCooler` table without a default value. This is not possible if the table is not empty.
  - Added the required column `partNumber` to the `Display` table without a default value. This is not possible if the table is not empty.
  - Added the required column `partNumber` to the `Gpu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `interface` to the `Hdd` table without a default value. This is not possible if the table is not empty.
  - Added the required column `partNumber` to the `Hdd` table without a default value. This is not possible if the table is not empty.
  - Added the required column `partNumber` to the `Memory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `partNumber` to the `MotherBoard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `partNumber` to the `PcCase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `partNumber` to the `Power` table without a default value. This is not possible if the table is not empty.
  - Added the required column `partNumber` to the `Ssd` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cpu" DROP COLUMN "itemValue",
ADD COLUMN     "partNumber" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CpuCooler" DROP COLUMN "itemValue",
ADD COLUMN     "partNumber" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Display" DROP COLUMN "itemValue",
ADD COLUMN     "partNumber" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Gpu" DROP COLUMN "itemValue",
ADD COLUMN     "partNumber" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Hdd" DROP COLUMN "interface1",
DROP COLUMN "interface2",
DROP COLUMN "itemValue",
ADD COLUMN     "interface" TEXT NOT NULL,
ADD COLUMN     "partNumber" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Memory" DROP COLUMN "itemValue",
ADD COLUMN     "partNumber" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "MotherBoard" DROP COLUMN "itemValue",
ADD COLUMN     "partNumber" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PcCase" DROP COLUMN "itemValue",
ADD COLUMN     "partNumber" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Power" DROP COLUMN "itemValue",
ADD COLUMN     "partNumber" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Ssd" DROP COLUMN "itemValue",
ADD COLUMN     "partNumber" TEXT NOT NULL;

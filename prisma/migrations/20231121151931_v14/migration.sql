/*
  Warnings:

  - You are about to drop the column `formfactor` on the `MotherBoard` table. All the data in the column will be lost.
  - You are about to drop the column `factor` on the `PcCase` table. All the data in the column will be lost.
  - Added the required column `powerConsumption` to the `Cpu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `Gpu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Memory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `formFactor` to the `MotherBoard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maxMemory` to the `MotherBoard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `memorySlots` to the `MotherBoard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `memoryType` to the `MotherBoard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pciSlots` to the `MotherBoard` table without a default value. This is not possible if the table is not empty.
  - Added the required column `formFactor` to the `PcCase` table without a default value. This is not possible if the table is not empty.
  - Added the required column `powerOutput` to the `Power` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cpu" ADD COLUMN     "powerConsumption" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Gpu" ADD COLUMN     "size" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Memory" ADD COLUMN     "type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "MotherBoard" DROP COLUMN "formfactor",
ADD COLUMN     "formFactor" TEXT NOT NULL,
ADD COLUMN     "maxMemory" TEXT NOT NULL,
ADD COLUMN     "memorySlots" TEXT NOT NULL,
ADD COLUMN     "memoryType" TEXT NOT NULL,
ADD COLUMN     "pciSlots" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PcCase" DROP COLUMN "factor",
ADD COLUMN     "formFactor" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Power" ADD COLUMN     "powerOutput" TEXT NOT NULL;

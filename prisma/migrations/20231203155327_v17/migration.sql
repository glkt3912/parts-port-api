/*
  Warnings:

  - You are about to drop the column `amd` on the `Cooler` table. All the data in the column will be lost.
  - You are about to drop the column `flowtype` on the `Cooler` table. All the data in the column will be lost.
  - You are about to drop the column `intel` on the `Cooler` table. All the data in the column will be lost.
  - You are about to drop the column `noise` on the `Cooler` table. All the data in the column will be lost.
  - You are about to drop the column `tdp` on the `Cpu` table. All the data in the column will be lost.
  - You are about to drop the column `area` on the `Display` table. All the data in the column will be lost.
  - You are about to drop the column `clock` on the `Gpu` table. All the data in the column will be lost.
  - You are about to drop the column `size` on the `Gpu` table. All the data in the column will be lost.
  - You are about to drop the column `cache` on the `Hdd` table. All the data in the column will be lost.
  - You are about to drop the column `series` on the `Hdd` table. All the data in the column will be lost.
  - You are about to drop the column `capacity` on the `Memory` table. All the data in the column will be lost.
  - You are about to drop the column `setnumber` on the `Memory` table. All the data in the column will be lost.
  - You are about to drop the column `standard` on the `Memory` table. All the data in the column will be lost.
  - You are about to drop the column `chipset` on the `MotherBoard` table. All the data in the column will be lost.
  - You are about to drop the column `powerOutput` on the `Power` table. All the data in the column will be lost.
  - You are about to drop the column `standard` on the `Power` table. All the data in the column will be lost.
  - You are about to drop the column `ssdtype` on the `Ssd` table. All the data in the column will be lost.
  - Added the required column `airFlow` to the `Cooler` table without a default value. This is not possible if the table is not empty.
  - Added the required column `coolingType` to the `Cooler` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fanCount` to the `Cooler` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `Cooler` table without a default value. This is not possible if the table is not empty.
  - Added the required column `socket` to the `Cooler` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wattage` to the `Cooler` table without a default value. This is not possible if the table is not empty.
  - Added the required column `baseFrequency` to the `Cpu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `boostedFrequency` to the `Cpu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `core` to the `Cpu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wattage` to the `Cpu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `baseFrequency` to the `Gpu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `length` to the `Gpu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `memoryFrequency` to the `Gpu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wattage` to the `Gpu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `Hdd` table without a default value. This is not possible if the table is not empty.
  - Added the required column `frequency` to the `Memory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `chip` to the `MotherBoard` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `maxMemory` on the `MotherBoard` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `memorySlots` on the `MotherBoard` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `type` to the `Power` table without a default value. This is not possible if the table is not empty.
  - Added the required column `speed` to the `Ssd` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cooler" DROP COLUMN "amd",
DROP COLUMN "flowtype",
DROP COLUMN "intel",
DROP COLUMN "noise",
ADD COLUMN     "airFlow" TEXT NOT NULL,
ADD COLUMN     "coolingType" TEXT NOT NULL,
ADD COLUMN     "fanCount" INTEGER NOT NULL,
ADD COLUMN     "size" TEXT NOT NULL,
ADD COLUMN     "socket" TEXT NOT NULL,
ADD COLUMN     "wattage" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Cpu" DROP COLUMN "tdp",
ADD COLUMN     "baseFrequency" TEXT NOT NULL,
ADD COLUMN     "boostedFrequency" TEXT NOT NULL,
ADD COLUMN     "core" INTEGER NOT NULL,
ADD COLUMN     "wattage" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Display" DROP COLUMN "area",
ALTER COLUMN "contrast" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Gpu" DROP COLUMN "clock",
DROP COLUMN "size",
ADD COLUMN     "baseFrequency" TEXT NOT NULL,
ADD COLUMN     "length" TEXT NOT NULL,
ADD COLUMN     "memoryFrequency" TEXT NOT NULL,
ADD COLUMN     "wattage" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Hdd" DROP COLUMN "cache",
DROP COLUMN "series",
ADD COLUMN     "size" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Memory" DROP COLUMN "capacity",
DROP COLUMN "setnumber",
DROP COLUMN "standard",
ADD COLUMN     "frequency" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "MotherBoard" DROP COLUMN "chipset",
ADD COLUMN     "chip" TEXT NOT NULL,
DROP COLUMN "maxMemory",
ADD COLUMN     "maxMemory" INTEGER NOT NULL,
DROP COLUMN "memorySlots",
ADD COLUMN     "memorySlots" INTEGER NOT NULL,
ALTER COLUMN "pciSlots" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Power" DROP COLUMN "powerOutput",
DROP COLUMN "standard",
ADD COLUMN     "type" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Ssd" DROP COLUMN "ssdtype",
ADD COLUMN     "speed" TEXT NOT NULL;

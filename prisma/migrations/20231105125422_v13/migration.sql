/*
  Warnings:

  - You are about to drop the column `CoolerId` on the `PartsList` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "PartsList" DROP CONSTRAINT "PartsList_CoolerId_fkey";

-- AlterTable
ALTER TABLE "PartsList" DROP COLUMN "CoolerId",
ADD COLUMN     "coolerId" INTEGER;

-- AddForeignKey
ALTER TABLE "PartsList" ADD CONSTRAINT "PartsList_coolerId_fkey" FOREIGN KEY ("coolerId") REFERENCES "Cooler"("id") ON DELETE SET NULL ON UPDATE CASCADE;

/*
  Warnings:

  - You are about to drop the column `wattage` on the `Cooler` table. All the data in the column will be lost.
  - Added the required column `supportedTdp` to the `Cooler` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cooler" DROP COLUMN "wattage",
ADD COLUMN     "supportedTdp" INTEGER NOT NULL;

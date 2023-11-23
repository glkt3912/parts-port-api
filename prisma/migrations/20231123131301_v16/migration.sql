/*
  Warnings:

  - You are about to drop the column `powerConsumption` on the `Cpu` table. All the data in the column will be lost.
  - Added the required column `tdp` to the `Cpu` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cpu" DROP COLUMN "powerConsumption",
ADD COLUMN     "tdp" INTEGER NOT NULL;

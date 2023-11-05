/*
  Warnings:

  - You are about to drop the column `size_wdh` on the `PcCase` table. All the data in the column will be lost.
  - Added the required column `size` to the `PcCase` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PcCase" DROP COLUMN "size_wdh",
ADD COLUMN     "size" TEXT NOT NULL;

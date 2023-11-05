/*
  Warnings:

  - You are about to drop the column `plus` on the `Power` table. All the data in the column will be lost.
  - Added the required column `certification` to the `Power` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Power" DROP COLUMN "plus",
ADD COLUMN     "certification" TEXT NOT NULL;

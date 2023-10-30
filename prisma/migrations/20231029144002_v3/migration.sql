/*
  Warnings:

  - You are about to drop the column `category` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `publicPrivate` on the `PartsList` table. All the data in the column will be lost.
  - Added the required column `name` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isOpened` to the `PartsList` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "category",
ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PartsList" DROP COLUMN "publicPrivate",
ADD COLUMN     "isOpened" BOOLEAN NOT NULL;

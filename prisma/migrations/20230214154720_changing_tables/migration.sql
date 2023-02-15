/*
  Warnings:

  - You are about to drop the `Mentee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Mentor` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Mentee" DROP CONSTRAINT "Mentee_mentorId_fkey";

-- DropForeignKey
ALTER TABLE "Mentee" DROP CONSTRAINT "Mentee_userId_fkey";

-- DropForeignKey
ALTER TABLE "Mentor" DROP CONSTRAINT "Mentor_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "mentorId" TEXT;

-- DropTable
DROP TABLE "Mentee";

-- DropTable
DROP TABLE "Mentor";

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

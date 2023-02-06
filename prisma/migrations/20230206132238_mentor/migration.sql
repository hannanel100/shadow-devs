-- CreateEnum
CREATE TYPE "RoleName" AS ENUM ('MENTOR', 'MENTEE', 'ADMIN');

-- CreateTable
CREATE TABLE "Mentor" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT,
    "tags" TEXT[],
    "rating" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Mentor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mentee" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT,
    "tags" TEXT[],
    "mentorId" INTEGER,

    CONSTRAINT "Mentee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Mentee_image_key" ON "Mentee"("image");

-- AddForeignKey
ALTER TABLE "Mentee" ADD CONSTRAINT "Mentee_mentorId_fkey" FOREIGN KEY ("mentorId") REFERENCES "Mentor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

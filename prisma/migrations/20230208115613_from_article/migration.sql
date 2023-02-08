/*
  Warnings:

  - The primary key for the `accounts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `accounts` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `sessions` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `sessions` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `VerificationToken` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[access_token]` on the table `sessions` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `user_id` on the `accounts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `access_token` to the `sessions` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `user_id` on the `sessions` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "accounts" DROP CONSTRAINT "accounts_user_id_fkey";

-- DropForeignKey
ALTER TABLE "sessions" DROP CONSTRAINT "sessions_user_id_fkey";

-- AlterTable
ALTER TABLE "accounts" DROP CONSTRAINT "accounts_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "user_id",
ADD COLUMN     "user_id" INTEGER NOT NULL,
ADD CONSTRAINT "accounts_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "sessions" DROP CONSTRAINT "sessions_pkey",
ADD COLUMN     "access_token" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "user_id",
ADD COLUMN     "user_id" INTEGER NOT NULL,
ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP,
ADD CONSTRAINT "sessions_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
ADD COLUMN     "email" TEXT,
ADD COLUMN     "email_verified" TIMESTAMP(3),
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "VerificationToken";

-- CreateTable
CREATE TABLE "verification_requests" (
    "id" SERIAL NOT NULL,
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "verification_requests_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "verification_requests_token_key" ON "verification_requests"("token");

-- CreateIndex
CREATE INDEX "userId" ON "accounts"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_access_token_key" ON "sessions"("access_token");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

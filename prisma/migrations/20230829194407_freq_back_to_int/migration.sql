/*
  Warnings:

  - You are about to alter the column `frequency` on the `Chore` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Integer`.

*/
-- AlterTable
ALTER TABLE "Chore" ALTER COLUMN "frequency" SET DATA TYPE INTEGER;

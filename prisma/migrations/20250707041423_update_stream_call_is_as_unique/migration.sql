/*
  Warnings:

  - A unique constraint covering the columns `[streamCallId]` on the table `interviews` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "interviews" ALTER COLUMN "startTime" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "endTime" SET DATA TYPE DOUBLE PRECISION;

-- CreateIndex
CREATE UNIQUE INDEX "interviews_streamCallId_key" ON "interviews"("streamCallId");

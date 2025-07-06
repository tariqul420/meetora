-- CreateEnum
CREATE TYPE "userRole" AS ENUM ('admin', 'recruiter', 'candidate');

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "role" "userRole" NOT NULL DEFAULT 'candidate';

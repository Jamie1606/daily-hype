-- AlterTable
ALTER TABLE "EndUser" ADD COLUMN     "code" CHAR(6),
ADD COLUMN     "code_expired_at" TIMESTAMPTZ;

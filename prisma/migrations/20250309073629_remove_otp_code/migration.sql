/*
  Warnings:

  - The values [PENDING] on the enum `UserStatus` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `code` on the `EndUser` table. All the data in the column will be lost.
  - You are about to drop the column `code_expired_at` on the `EndUser` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "UserStatus_new" AS ENUM ('ACTIVE', 'BANNED', 'DELETED', 'INACTIVE');
ALTER TABLE "EndUser" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "EndUser" ALTER COLUMN "status" TYPE "UserStatus_new" USING ("status"::text::"UserStatus_new");
ALTER TYPE "UserStatus" RENAME TO "UserStatus_old";
ALTER TYPE "UserStatus_new" RENAME TO "UserStatus";
DROP TYPE "UserStatus_old";
ALTER TABLE "EndUser" ALTER COLUMN "status" SET DEFAULT 'ACTIVE';
COMMIT;

-- AlterTable
ALTER TABLE "EndUser" DROP COLUMN "code",
DROP COLUMN "code_expired_at",
ALTER COLUMN "status" SET DEFAULT 'ACTIVE';

-- AlterTable
ALTER TABLE "Delivery" ALTER COLUMN "delivery_date" SET DATA TYPE TIMESTAMP;

-- AlterTable
ALTER TABLE "EndUser" ALTER COLUMN "code_expired_at" SET DATA TYPE TIMESTAMP;

-- AlterTable
ALTER TABLE "Refund" ALTER COLUMN "refund_date" SET DATA TYPE TIMESTAMP;

-- AlterTable
ALTER TABLE "UserSession" ALTER COLUMN "expired_at" SET DATA TYPE TIMESTAMP,
ALTER COLUMN "last_accessed_at" SET DATA TYPE TIMESTAMP;

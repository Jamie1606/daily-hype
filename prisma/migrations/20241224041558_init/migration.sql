-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'STAFF', 'USER');

-- CreateEnum
CREATE TYPE "UserGender" AS ENUM ('M', 'F');

-- CreateEnum
CREATE TYPE "ProductStatus" AS ENUM ('OUT_OF_STOCK', 'IN_STOCK', 'LOW_STOCK', 'REMOVED');

-- CreateEnum
CREATE TYPE "UserStatus" AS ENUM ('ACTIVE', 'BANNED', 'DELETED', 'INACTIVE');

-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('PENDING', 'PLANNED', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'COMPLETED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "AddressStatus" AS ENUM ('ACTIVE', 'DELETED');

-- CreateEnum
CREATE TYPE "DeliveryStatus" AS ENUM ('PENDING', 'IN_PROGRESS', 'DELIVERED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "RefundStatus" AS ENUM ('PENDING', 'COMPLETED', 'CANCELLED');

-- CreateTable
CREATE TABLE "Category" (
    "category_id" TEXT NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "Gender" (
    "gender_id" TEXT NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Gender_pkey" PRIMARY KEY ("gender_id")
);

-- CreateTable
CREATE TABLE "Color" (
    "color_id" TEXT NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "hex_code" CHAR(6) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Color_pkey" PRIMARY KEY ("color_id")
);

-- CreateTable
CREATE TABLE "Size" (
    "size_id" TEXT NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Size_pkey" PRIMARY KEY ("size_id")
);

-- CreateTable
CREATE TABLE "Product" (
    "product_id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "unit_price" DECIMAL(10,2) NOT NULL,
    "status" "ProductStatus" NOT NULL DEFAULT 'IN_STOCK',
    "total_rating" INTEGER NOT NULL DEFAULT 0,
    "gender_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("product_id")
);

-- CreateTable
CREATE TABLE "ProductCategory" (
    "product_id" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductCategory_pkey" PRIMARY KEY ("product_id","category_id")
);

-- CreateTable
CREATE TABLE "ProductImage" (
    "product_id" TEXT NOT NULL,
    "color_id" TEXT NOT NULL,
    "is_primary" BOOLEAN NOT NULL DEFAULT false,
    "url" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductImage_pkey" PRIMARY KEY ("product_id","color_id")
);

-- CreateTable
CREATE TABLE "ProductVariant" (
    "variant_id" TEXT NOT NULL,
    "size_id" TEXT NOT NULL,
    "color_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "status" "ProductStatus" NOT NULL DEFAULT 'IN_STOCK',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductVariant_pkey" PRIMARY KEY ("variant_id")
);

-- CreateTable
CREATE TABLE "EndUser" (
    "user_id" TEXT NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "gender" "UserGender",
    "phone" CHAR(8),
    "role" "Role" NOT NULL DEFAULT 'USER',
    "status" "UserStatus" NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "EndUser_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "UserSession" (
    "session_id" TEXT NOT NULL,
    "device" VARCHAR(50) NOT NULL,
    "refresh_token" VARCHAR(255) NOT NULL,
    "expired_at" TIMESTAMPTZ NOT NULL,
    "last_accessed_at" TIMESTAMPTZ NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserSession_pkey" PRIMARY KEY ("session_id")
);

-- CreateTable
CREATE TABLE "Wishlist" (
    "wish_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Wishlist_pkey" PRIMARY KEY ("wish_id")
);

-- CreateTable
CREATE TABLE "Cart" (
    "cart_id" TEXT NOT NULL,
    "variant_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("cart_id")
);

-- CreateTable
CREATE TABLE "ProductOrder" (
    "order_id" TEXT NOT NULL,
    "total_amount" DECIMAL(10,2) NOT NULL,
    "address_id" TEXT NOT NULL,
    "status" "OrderStatus" NOT NULL DEFAULT 'PENDING',
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductOrder_pkey" PRIMARY KEY ("order_id")
);

-- CreateTable
CREATE TABLE "ProductOrderItem" (
    "order_id" TEXT NOT NULL,
    "variant_id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "status" "OrderStatus" NOT NULL DEFAULT 'PENDING',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProductOrderItem_pkey" PRIMARY KEY ("order_id","variant_id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "payment_id" TEXT NOT NULL,
    "payment_method" VARCHAR(25) NOT NULL,
    "amount" INTEGER NOT NULL,
    "status" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "transaction_id" VARCHAR(255) NOT NULL,
    "order_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("payment_id")
);

-- CreateTable
CREATE TABLE "AddressBook" (
    "address_id" TEXT NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "block_number" INTEGER NOT NULL,
    "street_name" VARCHAR(50) NOT NULL,
    "unit_no" VARCHAR(10) NOT NULL,
    "building_name" VARCHAR(50) NOT NULL,
    "postal_code" CHAR(6) NOT NULL,
    "user_id" TEXT NOT NULL,
    "status" "AddressStatus" NOT NULL DEFAULT 'ACTIVE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AddressBook_pkey" PRIMARY KEY ("address_id")
);

-- CreateTable
CREATE TABLE "Review" (
    "review_id" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "description" TEXT,
    "order_id" TEXT NOT NULL,
    "variant_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("review_id")
);

-- CreateTable
CREATE TABLE "ReviewImage" (
    "image_id" TEXT NOT NULL,
    "url" VARCHAR(255) NOT NULL,
    "review_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ReviewImage_pkey" PRIMARY KEY ("image_id")
);

-- CreateTable
CREATE TABLE "Delivery" (
    "delivery_id" TEXT NOT NULL,
    "delivery_date" TIMESTAMPTZ NOT NULL,
    "status" "DeliveryStatus" NOT NULL DEFAULT 'PENDING',
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Delivery_pkey" PRIMARY KEY ("delivery_id")
);

-- CreateTable
CREATE TABLE "DeliveryDetail" (
    "delivery_id" TEXT NOT NULL,
    "order_id" TEXT NOT NULL,
    "status" "DeliveryStatus" NOT NULL DEFAULT 'PENDING',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DeliveryDetail_pkey" PRIMARY KEY ("delivery_id","order_id")
);

-- CreateTable
CREATE TABLE "Refund" (
    "refund_id" TEXT NOT NULL,
    "refund_date" TIMESTAMPTZ NOT NULL,
    "description" TEXT,
    "reason" VARCHAR(150) NOT NULL,
    "status" "RefundStatus" NOT NULL DEFAULT 'PENDING',
    "order_id" TEXT NOT NULL,
    "variant_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Refund_pkey" PRIMARY KEY ("refund_id")
);

-- CreateTable
CREATE TABLE "RefundImage" (
    "image_id" TEXT NOT NULL,
    "url" VARCHAR(255) NOT NULL,
    "refund_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RefundImage_pkey" PRIMARY KEY ("image_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Gender_name_key" ON "Gender"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Color_name_key" ON "Color"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Size_name_key" ON "Size"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Product_name_key" ON "Product"("name");

-- CreateIndex
CREATE UNIQUE INDEX "EndUser_email_key" ON "EndUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "EndUser_phone_key" ON "EndUser"("phone");

-- CreateIndex
CREATE INDEX "EndUser_email_status_idx" ON "EndUser"("email", "status");

-- CreateIndex
CREATE INDEX "Cart_user_id_idx" ON "Cart"("user_id");

-- CreateIndex
CREATE INDEX "ProductOrder_user_id_idx" ON "ProductOrder"("user_id");

-- CreateIndex
CREATE INDEX "ProductOrder_user_id_status_idx" ON "ProductOrder"("user_id", "status");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_gender_id_fkey" FOREIGN KEY ("gender_id") REFERENCES "Gender"("gender_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductCategory" ADD CONSTRAINT "ProductCategory_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Category"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductCategory" ADD CONSTRAINT "ProductCategory_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_color_id_fkey" FOREIGN KEY ("color_id") REFERENCES "Color"("color_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductImage" ADD CONSTRAINT "ProductImage_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariant" ADD CONSTRAINT "ProductVariant_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariant" ADD CONSTRAINT "ProductVariant_size_id_fkey" FOREIGN KEY ("size_id") REFERENCES "Size"("size_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductVariant" ADD CONSTRAINT "ProductVariant_color_id_fkey" FOREIGN KEY ("color_id") REFERENCES "Color"("color_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSession" ADD CONSTRAINT "UserSession_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "EndUser"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wishlist" ADD CONSTRAINT "Wishlist_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "EndUser"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wishlist" ADD CONSTRAINT "Wishlist_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "Product"("product_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_variant_id_fkey" FOREIGN KEY ("variant_id") REFERENCES "ProductVariant"("variant_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "EndUser"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductOrder" ADD CONSTRAINT "ProductOrder_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "EndUser"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductOrder" ADD CONSTRAINT "ProductOrder_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "AddressBook"("address_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductOrderItem" ADD CONSTRAINT "ProductOrderItem_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "ProductOrder"("order_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductOrderItem" ADD CONSTRAINT "ProductOrderItem_variant_id_fkey" FOREIGN KEY ("variant_id") REFERENCES "ProductVariant"("variant_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "ProductOrder"("order_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AddressBook" ADD CONSTRAINT "AddressBook_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "EndUser"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_order_id_variant_id_fkey" FOREIGN KEY ("order_id", "variant_id") REFERENCES "ProductOrderItem"("order_id", "variant_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "EndUser"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewImage" ADD CONSTRAINT "ReviewImage_review_id_fkey" FOREIGN KEY ("review_id") REFERENCES "Review"("review_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "EndUser"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeliveryDetail" ADD CONSTRAINT "DeliveryDetail_delivery_id_fkey" FOREIGN KEY ("delivery_id") REFERENCES "Delivery"("delivery_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeliveryDetail" ADD CONSTRAINT "DeliveryDetail_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "ProductOrder"("order_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Refund" ADD CONSTRAINT "Refund_order_id_variant_id_fkey" FOREIGN KEY ("order_id", "variant_id") REFERENCES "ProductOrderItem"("order_id", "variant_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RefundImage" ADD CONSTRAINT "RefundImage_refund_id_fkey" FOREIGN KEY ("refund_id") REFERENCES "Refund"("refund_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- CreateEnum
CREATE TYPE "kind" AS ENUM ('TeraByte', 'Pichau', 'Kabum');

-- CreateTable
CREATE TABLE "Product" (
    "Id" TEXT NOT NULL,
    "Title" TEXT,
    "Description" TEXT,
    "Value" DOUBLE PRECISION NOT NULL,
    "Link" TEXT NOT NULL,
    "Where" TEXT NOT NULL,
    "Kind" "kind" NOT NULL,
    "ImageUrl" TEXT,
    "Slug" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Price" (
    "Id" TEXT NOT NULL,
    "AtDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Price" DOUBLE PRECISION NOT NULL,
    "ProdId" TEXT NOT NULL,

    CONSTRAINT "Price_pkey" PRIMARY KEY ("Id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_Link_key" ON "Product"("Link");

-- AddForeignKey
ALTER TABLE "Price" ADD CONSTRAINT "Price_ProdId_fkey" FOREIGN KEY ("ProdId") REFERENCES "Product"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

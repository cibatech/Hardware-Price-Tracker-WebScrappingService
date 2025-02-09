-- CreateTable
CREATE TABLE "Scrap" (
    "Id" SERIAL NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Scraped" TEXT NOT NULL,

    CONSTRAINT "Scrap_pkey" PRIMARY KEY ("Id")
);

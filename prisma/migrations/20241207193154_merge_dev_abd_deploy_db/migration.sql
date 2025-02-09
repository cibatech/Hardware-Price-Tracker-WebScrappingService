-- CreateTable
CREATE TABLE "StaticLink" (
    "Id" SERIAL NOT NULL,
    "Link" TEXT NOT NULL,
    "GeneratedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Where" TEXT NOT NULL,

    CONSTRAINT "StaticLink_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Issue" (
    "Id" TEXT NOT NULL,
    "When" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Reason" TEXT,
    "At" TEXT,

    CONSTRAINT "Issue_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "TriggerWarning" (
    "Id" TEXT NOT NULL,
    "TargetPrice" INTEGER NOT NULL,
    "UserId" TEXT NOT NULL,
    "ProdId" TEXT NOT NULL,

    CONSTRAINT "TriggerWarning_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "User" (
    "Id" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id")
);

-- AddForeignKey
ALTER TABLE "TriggerWarning" ADD CONSTRAINT "TriggerWarning_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriggerWarning" ADD CONSTRAINT "TriggerWarning_ProdId_fkey" FOREIGN KEY ("ProdId") REFERENCES "Product"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

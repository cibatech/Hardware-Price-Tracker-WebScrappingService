/*
  Warnings:

  - Added the required column `Where` to the `StaticLink` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_StaticLink" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Link" TEXT NOT NULL,
    "GeneratedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Where" TEXT NOT NULL
);
INSERT INTO "new_StaticLink" ("GeneratedAt", "Id", "Link") SELECT "GeneratedAt", "Id", "Link" FROM "StaticLink";
DROP TABLE "StaticLink";
ALTER TABLE "new_StaticLink" RENAME TO "StaticLink";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

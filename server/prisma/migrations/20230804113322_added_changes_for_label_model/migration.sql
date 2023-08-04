/*
  Warnings:

  - Added the required column `color` to the `Label` table without a default value. This is not possible if the table is not empty.
  - Added the required column `full_title` to the `Label` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Label" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "full_title" TEXT NOT NULL,
    "color" TEXT NOT NULL
);
INSERT INTO "new_Label" ("id", "title") SELECT "id", "title" FROM "Label";
DROP TABLE "Label";
ALTER TABLE "new_Label" RENAME TO "Label";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

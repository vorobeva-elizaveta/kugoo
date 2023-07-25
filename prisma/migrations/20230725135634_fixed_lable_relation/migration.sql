/*
  Warnings:

  - You are about to drop the column `labelId` on the `Product` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_LabelToProduct" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_LabelToProduct_A_fkey" FOREIGN KEY ("A") REFERENCES "Label" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_LabelToProduct_B_fkey" FOREIGN KEY ("B") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cost" REAL,
    "work_time" INTEGER,
    "speed" REAL,
    "horsepower" REAL
);
INSERT INTO "new_Product" ("cost", "horsepower", "id", "speed", "work_time") SELECT "cost", "horsepower", "id", "speed", "work_time" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_LabelToProduct_AB_unique" ON "_LabelToProduct"("A", "B");

-- CreateIndex
CREATE INDEX "_LabelToProduct_B_index" ON "_LabelToProduct"("B");

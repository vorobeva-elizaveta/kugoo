-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Label" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "full_title" TEXT,
    "color" TEXT
);
INSERT INTO "new_Label" ("color", "full_title", "id", "title") SELECT "color", "full_title", "id", "title" FROM "Label";
DROP TABLE "Label";
ALTER TABLE "new_Label" RENAME TO "Label";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT,
    "login" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cost" REAL,
    "work_time" INTEGER,
    "speed" REAL,
    "horsepower" REAL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_login_key" ON "User"("login");

-- CreateTable
CREATE TABLE "Chore" (
    "userId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,
    "updated_at" TEXT NOT NULL,
    "frequency" INTEGER NOT NULL,
    "public" BOOLEAN NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Chore_userId_title_key" ON "Chore"("userId", "title");

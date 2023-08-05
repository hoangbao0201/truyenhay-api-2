/*
  Warnings:

  - You are about to drop the column `comicId` on the `genres` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "genres" DROP CONSTRAINT "genres_comicId_fkey";

-- AlterTable
ALTER TABLE "genres" DROP COLUMN "comicId";

-- CreateTable
CREATE TABLE "comic_genres" (
    "id" SERIAL NOT NULL,
    "comicId" INTEGER NOT NULL,
    "genreId" INTEGER NOT NULL,

    CONSTRAINT "comic_genres_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "comic_genres_comicId_genreId_key" ON "comic_genres"("comicId", "genreId");

-- AddForeignKey
ALTER TABLE "comic_genres" ADD CONSTRAINT "comic_genres_comicId_fkey" FOREIGN KEY ("comicId") REFERENCES "comics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comic_genres" ADD CONSTRAINT "comic_genres_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "genres"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

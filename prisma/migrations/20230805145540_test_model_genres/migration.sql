/*
  Warnings:

  - You are about to drop the `comic_genres` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "comic_genres" DROP CONSTRAINT "comic_genres_comicId_fkey";

-- DropForeignKey
ALTER TABLE "comic_genres" DROP CONSTRAINT "comic_genres_genreId_fkey";

-- DropTable
DROP TABLE "comic_genres";

-- CreateTable
CREATE TABLE "_ComicToGenre" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ComicToGenre_AB_unique" ON "_ComicToGenre"("A", "B");

-- CreateIndex
CREATE INDEX "_ComicToGenre_B_index" ON "_ComicToGenre"("B");

-- AddForeignKey
ALTER TABLE "_ComicToGenre" ADD CONSTRAINT "_ComicToGenre_A_fkey" FOREIGN KEY ("A") REFERENCES "comics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ComicToGenre" ADD CONSTRAINT "_ComicToGenre_B_fkey" FOREIGN KEY ("B") REFERENCES "genres"("id") ON DELETE CASCADE ON UPDATE CASCADE;

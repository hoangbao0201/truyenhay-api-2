/*
  Warnings:

  - You are about to drop the `_ComicToGenre` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ComicToGenre" DROP CONSTRAINT "_ComicToGenre_A_fkey";

-- DropForeignKey
ALTER TABLE "_ComicToGenre" DROP CONSTRAINT "_ComicToGenre_B_fkey";

-- DropTable
DROP TABLE "_ComicToGenre";

-- CreateTable
CREATE TABLE "ComicGenre" (
    "comicId" INTEGER NOT NULL,
    "genreId" INTEGER NOT NULL,

    CONSTRAINT "ComicGenre_pkey" PRIMARY KEY ("comicId","genreId")
);

-- AddForeignKey
ALTER TABLE "ComicGenre" ADD CONSTRAINT "ComicGenre_comicId_fkey" FOREIGN KEY ("comicId") REFERENCES "comics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComicGenre" ADD CONSTRAINT "ComicGenre_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "genres"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

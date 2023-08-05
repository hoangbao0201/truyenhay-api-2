-- DropForeignKey
ALTER TABLE "ComicGenre" DROP CONSTRAINT "ComicGenre_comicId_fkey";

-- DropForeignKey
ALTER TABLE "ComicGenre" DROP CONSTRAINT "ComicGenre_genreId_fkey";

-- DropForeignKey
ALTER TABLE "comics" DROP CONSTRAINT "comics_userId_fkey";

-- AddForeignKey
ALTER TABLE "comics" ADD CONSTRAINT "comics_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComicGenre" ADD CONSTRAINT "ComicGenre_comicId_fkey" FOREIGN KEY ("comicId") REFERENCES "comics"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ComicGenre" ADD CONSTRAINT "ComicGenre_genreId_fkey" FOREIGN KEY ("genreId") REFERENCES "genres"("id") ON DELETE CASCADE ON UPDATE CASCADE;

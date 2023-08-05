-- CreateTable
CREATE TABLE "genres" (
    "id" SERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "comicId" INTEGER NOT NULL,

    CONSTRAINT "genres_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "genres" ADD CONSTRAINT "genres_comicId_fkey" FOREIGN KEY ("comicId") REFERENCES "comics"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

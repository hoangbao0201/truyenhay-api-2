import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { Comic } from "@prisma/client";
import { CreateComicDTO, UpdateComicDTO } from "./dto";

@Injectable({})
export class ComicService {

    constructor(
        private prismaService: PrismaService
    ) {}

    async createComic(userId: number, body: CreateComicDTO) : Promise<any> {

        const { slug, title, thumbnail, authors, other_names, description, comicGenres } = body;

        const comic = await this.prismaService.comic.create({
            data: {
                userId: userId,
                slug: slug,
                thumbnail: thumbnail,
                title: title,
                authors: authors || null,
                description: description || null,
                other_names: other_names || null,
                status: null,
                comicGenres: {
                    create: comicGenres.map((idGenre) => {
                        return {
                            genre: {
                                connect: { id: Number(idGenre) },
                            },
                        }
                    })
                }
            }
        })

        return {
            comic: comic
        }
    }

    async findAll() {
        const genres = await this.prismaService.genre.findMany({})
    
        return genres;
    }

    async findOne(slug: string) {
        let lastHyphenIndex = slug.lastIndexOf('-');
        const checkLast = slug.slice(lastHyphenIndex+1, slug.length)
        let nameSlug = slug;
        if ( checkLast === '' || Number(checkLast) > 0) {
            nameSlug = slug.slice(0, lastHyphenIndex);
        }

        const comic = await this.prismaService.comic.findFirst({
            where: {
                slug: nameSlug
            },
            include: {
                user: {
                    select: {
                        id: true,
                        username: true,
                        fullName: true
                    }
                },
                comicGenres: {
                    include: {
                        genre: {
                            select: {
                                id: true,
                                slug: true,
                                title: true
                            }
                        }
                    }
                }
            }
        })

        return {
            comic: comic
        };
    }

    update(id: number, updateGenreDto: UpdateComicDTO) {
        return `This action updates a #${id} genre`;
    }

    remove(id: number) {
        return `This action removes a #${id} genre`;
    }
}
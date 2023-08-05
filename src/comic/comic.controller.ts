import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ComicService } from './comic.service';
import { MyJwtGuard } from '../auth/guard';
import { GetUser } from '../auth/decorator';
import { CreateComicDTO, UpdateComicDTO } from './dto';

@Controller('/api/comics')
export class ComicController {
    constructor(
        private comicService: ComicService
    ) {}

    // PATH .../api/comics/create
    @UseGuards(MyJwtGuard)
    @Post('')
    createPost(
        @GetUser('id') userId: number,
        @Body() createComicDTO: CreateComicDTO
    ) {
        return this.comicService.createComic(userId, createComicDTO)
    }

    // @UseGuards(MyJwtGuard)
    // @Post('/many')
    // createMany() {
    //     return this.comicService.createMany();
    // }

    @Get()
    findAll() {
        return this.comicService.findAll();
    }

    @Get(':slug')
    findOne(@Param('slug') slug: string) {
        return this.comicService.findOne(slug);
    }

    @UseGuards(MyJwtGuard)
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateGenreDto: UpdateComicDTO) {
        return this.comicService.update(+id, updateGenreDto);
    }

    @UseGuards(MyJwtGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.comicService.remove(+id);
    }
}

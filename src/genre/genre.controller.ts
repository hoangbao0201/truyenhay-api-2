import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { GenreService } from './genre.service';
import { CreateGenreDTO, UpdateGenreDTO } from './dto';
import { MyJwtGuard } from '../auth/guard';

@Controller('/api/genres')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @UseGuards(MyJwtGuard)
  @Post()
  create(@Body() createGenreDto: CreateGenreDTO) {
    return this.genreService.create(createGenreDto);
  }

  @UseGuards(MyJwtGuard)
  @Post('/many')
  createMany() {
    return this.genreService.createMany();
  }

  @Get()
  findAll() {
    return this.genreService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.genreService.findOne(+id);
  }

  @UseGuards(MyJwtGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGenreDto: UpdateGenreDTO) {
    return this.genreService.update(+id, updateGenreDto);
  }

  @UseGuards(MyJwtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.genreService.remove(+id);
  }
}

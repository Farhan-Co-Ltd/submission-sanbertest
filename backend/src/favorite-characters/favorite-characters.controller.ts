import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { FavoriteCharactersService } from './favorite-characters.service';

@Controller('favorite-characters')
export class FavoriteCharactersController {
  constructor(
    private readonly favoriteCharactersService: FavoriteCharactersService,
  ) {}

  @Get(':personId')
  async findAllByPersonId(@Param('personId') personId: string) {
    return this.favoriteCharactersService.findAllByPersonId(+personId);
  }

  @Post(':personId')
  async create(
    @Param('personId') personId: string,
    @Body() data: { origin: string; name: string },
  ) {
    return this.favoriteCharactersService.create(+personId, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.favoriteCharactersService.remove(+id);
  }
}

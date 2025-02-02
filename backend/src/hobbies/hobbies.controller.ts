import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { HobbiesService } from './hobbies.service';

@Controller('hobbies')
export class HobbiesController {
  constructor(private readonly hobbiesService: HobbiesService) {}

  @Get(':personId')
  async findAllByPersonId(@Param('personId') personId: string) {
    return this.hobbiesService.findAllByPersonId(+personId);
  }

  @Post(':personId')
  async create(
    @Param('personId') personId: string,
    @Body('name') name: string,
  ) {
    return this.hobbiesService.create(+personId, name);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.hobbiesService.remove(+id);
  }
}

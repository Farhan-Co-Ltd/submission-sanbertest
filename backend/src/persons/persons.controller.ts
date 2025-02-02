/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { PersonsService } from './persons.service';

@Controller('persons')
export class PersonsController {
  constructor(private readonly personsService: PersonsService) {}

  @Get()
  async findAll() {
    return this.personsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.personsService.findOne(+id);
  }

  @Post()
  async create(@Body() data: { name: string; phone: string; email: string }) {
    return this.personsService.create(data);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() data: { name?: string; phone?: string; email?: string },
  ) {
    return this.personsService.update(+id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.personsService.remove(+id);
  }
}

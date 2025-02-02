import { Module } from '@nestjs/common';
import { FavoriteCharactersService } from './favorite-characters.service';
import { FavoriteCharactersController } from './favorite-characters.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [FavoriteCharactersController],
  providers: [FavoriteCharactersService, PrismaService],
})
export class FavoriteCharactersModule {}

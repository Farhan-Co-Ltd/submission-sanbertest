import { Module } from '@nestjs/common';
import { HobbiesService } from './hobbies.service';
import { HobbiesController } from './hobbies.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [HobbiesController],
  providers: [HobbiesService, PrismaService],
})
export class HobbiesModule {}

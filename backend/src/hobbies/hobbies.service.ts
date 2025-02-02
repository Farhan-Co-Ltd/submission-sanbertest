import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class HobbiesService {
  constructor(private prisma: PrismaService) {}

  async findAllByPersonId(personId: number) {
    return this.prisma.hobby.findMany({ where: { personId } });
  }

  async create(personId: number, name: string) {
    return this.prisma.hobby.create({ data: { name, personId } });
  }

  async remove(id: number) {
    return this.prisma.hobby.delete({ where: { id } });
  }
}

/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PersonsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.person.findMany();
  }

  async findOne(id: number) {
    return this.prisma.person.findUnique({ where: { id } });
  }

  async create(data: { name: string; phone: string; email: string }) {
    return this.prisma.person.create({ data });
  }

  async update(
    id: number,
    data: { name?: string; phone?: string; email?: string },
  ) {
    return this.prisma.person.update({ where: { id }, data });
  }

  async remove(id: number) {
    return this.prisma.person.delete({ where: { id } });
  }
}

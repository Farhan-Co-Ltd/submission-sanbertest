import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FavoriteCharactersService {
  constructor(private prisma: PrismaService) {}

  async findAllByPersonId(personId: number) {
    return this.prisma.favoriteCharacter.findMany({ where: { personId } });
  }

  async create(personId: number, data: { origin: string; name: string }) {
    return this.prisma.favoriteCharacter.create({
      data: { ...data, personId },
    });
  }

  async remove(id: number) {
    return this.prisma.favoriteCharacter.delete({ where: { id } });
  }
}

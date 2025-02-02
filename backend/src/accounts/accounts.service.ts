import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as crypto from 'crypto';

@Injectable()
export class AccountsService {
  constructor(private prisma: PrismaService) {}

  private encryptPassword(password: string): string {
    const key = crypto.scryptSync('super-rahasia', 'salt', 32);
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let encrypted = cipher.update(password, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return iv.toString('hex') + ':' + encrypted;
  }

  async create(username: string, password: string) {
    const encryptedPassword = this.encryptPassword(password);
    return this.prisma.account.create({
      data: { username, password: encryptedPassword },
    });
  }
}

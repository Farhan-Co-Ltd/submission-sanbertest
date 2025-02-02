import { Module } from '@nestjs/common';
import { AccountsModule } from './accounts/accounts.module';
import { PersonsModule } from './persons/persons.module';
import { HobbiesModule } from './hobbies/hobbies.module';
import { FavoriteCharactersModule } from './favorite-characters/favorite-characters.module';
import { PrismaService } from './prisma/prisma.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AccountsModule,
    PersonsModule,
    HobbiesModule,
    FavoriteCharactersModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

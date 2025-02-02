import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteCharactersController } from './favorite-characters.controller';

describe('FavoriteCharactersController', () => {
  let controller: FavoriteCharactersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoriteCharactersController],
    }).compile();

    controller = module.get<FavoriteCharactersController>(
      FavoriteCharactersController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

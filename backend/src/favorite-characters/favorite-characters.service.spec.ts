import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteCharactersService } from './favorite-characters.service';

describe('FavoriteCharactersService', () => {
  let service: FavoriteCharactersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoriteCharactersService],
    }).compile();

    service = module.get<FavoriteCharactersService>(FavoriteCharactersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

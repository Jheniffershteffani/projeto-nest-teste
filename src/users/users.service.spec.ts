import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let animalCenterService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    animalCenterService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(animalCenterService).toBeDefined();
  });

  it('Verificar se recebeu o usuário', () => {
    expect(animalCenterService.findAll()).toBe("batata");
  });

  it('Verificar se recebeu o usuário', () => {
    const nome_do_animal = "thor"
    const resultado_esperado = `O animal ${nome_do_animal} foi cadastrado com sucesso`
    const resultado_da_funcao = animalCenterService.receberAnimal("thor")
    expect(resultado_da_funcao).toBe(resultado_esperado);
  });
  it('Verificar se recebeu o usuário', () => {
    expect(animalCenterService.receberAnimal("thor")).toBe(`O animal thor foi cadastrado com sucesso`);
    expect(animalCenterService.receberAnimal("amora")).toBe(`O animal amora foi cadastrado com sucesso`);
    expect(animalCenterService.receberAnimal("cacau")).toBe(`O animal cacau foi cadastrado com sucesso`);
    expect(animalCenterService.receberAnimal("pingo")).toBe(`O animal pingo foi cadastrado com sucesso`);
    expect(animalCenterService.receberAnimal("theo")).toBe(`O animal theo foi cadastrado com sucesso`);
  });
});

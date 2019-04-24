import { TestBed } from '@angular/core/testing';

import { ListarIndicacaoService } from './listar-indicacao.service';

describe('ListarIndicacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListarIndicacaoService = TestBed.get(ListarIndicacaoService);
    expect(service).toBeTruthy();
  });
});
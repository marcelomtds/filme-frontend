import { TestBed } from '@angular/core/testing';

import { IndicacaoService } from './indicacao.service';

describe('IndicacaoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IndicacaoService = TestBed.get(IndicacaoService);
    expect(service).toBeTruthy();
  });
});

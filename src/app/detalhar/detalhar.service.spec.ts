import { TestBed } from '@angular/core/testing';

import { DetalharService } from './detalhar.service';

describe('DetalharService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetalharService = TestBed.get(DetalharService);
    expect(service).toBeTruthy();
  });
});

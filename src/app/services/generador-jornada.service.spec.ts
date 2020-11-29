import { TestBed } from '@angular/core/testing';

import { GeneradorJornadaService } from './generador-jornada.service';

describe('GeneradorJornadaService', () => {
  let service: GeneradorJornadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneradorJornadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

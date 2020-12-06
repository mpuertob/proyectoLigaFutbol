import { TestBed } from '@angular/core/testing';

import { EquiposFutbolService } from './equipos-futbol.service';

describe('EquiposFutbolService', () => {
  let service: EquiposFutbolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquiposFutbolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

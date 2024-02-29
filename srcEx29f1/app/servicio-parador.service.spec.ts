import { TestBed } from '@angular/core/testing';

import { ServicioParadorService } from './servicio-parador.service';

describe('ServicioParadorService', () => {
  let service: ServicioParadorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioParadorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

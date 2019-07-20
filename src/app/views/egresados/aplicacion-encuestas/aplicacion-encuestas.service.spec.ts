import { TestBed } from '@angular/core/testing';

import { AplicacionEncuestasService } from './aplicacion-encuestas.service';

describe('AplicacionEncuestasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AplicacionEncuestasService = TestBed.get(AplicacionEncuestasService);
    expect(service).toBeTruthy();
  });
});

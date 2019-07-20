import { TestBed } from '@angular/core/testing';

import { TiposPreguntasService } from './tipos-preguntas.service';

describe('TiposPreguntasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TiposPreguntasService = TestBed.get(TiposPreguntasService);
    expect(service).toBeTruthy();
  });
});

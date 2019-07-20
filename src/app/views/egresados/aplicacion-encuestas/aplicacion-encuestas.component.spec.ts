import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicacionEncuestasComponent } from './aplicacion-encuestas.component';

describe('AplicacionEncuestasComponent', () => {
  let component: AplicacionEncuestasComponent;
  let fixture: ComponentFixture<AplicacionEncuestasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AplicacionEncuestasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicacionEncuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

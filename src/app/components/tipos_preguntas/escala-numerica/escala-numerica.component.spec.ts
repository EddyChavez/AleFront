import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalaNumericaComponent } from './escala-numerica.component';

describe('EscalaNumericaComponent', () => {
  let component: EscalaNumericaComponent;
  let fixture: ComponentFixture<EscalaNumericaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscalaNumericaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscalaNumericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

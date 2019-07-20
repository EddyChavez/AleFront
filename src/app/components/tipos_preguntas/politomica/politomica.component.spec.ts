import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolitomicaComponent } from './politomica.component';

describe('PolitomicaComponent', () => {
  let component: PolitomicaComponent;
  let fixture: ComponentFixture<PolitomicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolitomicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolitomicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

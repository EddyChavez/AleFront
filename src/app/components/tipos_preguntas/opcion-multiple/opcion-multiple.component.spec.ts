import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcionMultipleComponent } from './opcion-multiple.component';

describe('OpcionMultipleComponent', () => {
  let component: OpcionMultipleComponent;
  let fixture: ComponentFixture<OpcionMultipleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcionMultipleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcionMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

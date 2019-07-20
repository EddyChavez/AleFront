import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MixtaComponent } from './mixta.component';

describe('MixtaComponent', () => {
  let component: MixtaComponent;
  let fixture: ComponentFixture<MixtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MixtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MixtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsectorComponent } from './consector.component';

describe('ConsectorComponent', () => {
  let component: ConsectorComponent;
  let fixture: ComponentFixture<ConsectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

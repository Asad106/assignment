import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MallsSectionComponent } from './malls-section.component';

describe('MallsSectionComponent', () => {
  let component: MallsSectionComponent;
  let fixture: ComponentFixture<MallsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MallsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MallsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

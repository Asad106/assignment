import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuranteeComponent } from './gurantee.component';

describe('GuranteeComponent', () => {
  let component: GuranteeComponent;
  let fixture: ComponentFixture<GuranteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuranteeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuranteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

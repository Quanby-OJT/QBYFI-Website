import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityStep1Component } from './availability-step1.component';

describe('AvailabilityStep1Component', () => {
  let component: AvailabilityStep1Component;
  let fixture: ComponentFixture<AvailabilityStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvailabilityStep1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvailabilityStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

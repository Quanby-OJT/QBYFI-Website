import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityStep3Component } from './availability-step3.component';

describe('AvailabilityStep3Component', () => {
  let component: AvailabilityStep3Component;
  let fixture: ComponentFixture<AvailabilityStep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvailabilityStep3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvailabilityStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

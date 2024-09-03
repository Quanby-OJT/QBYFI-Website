import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityStep2Component } from './availability-step2.component';

describe('AvailabilityStep2Component', () => {
  let component: AvailabilityStep2Component;
  let fixture: ComponentFixture<AvailabilityStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvailabilityStep2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvailabilityStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

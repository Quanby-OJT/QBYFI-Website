import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityStep4Component } from './availability-step4.component';

describe('AvailabilityStep4Component', () => {
  let component: AvailabilityStep4Component;
  let fixture: ComponentFixture<AvailabilityStep4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvailabilityStep4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvailabilityStep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

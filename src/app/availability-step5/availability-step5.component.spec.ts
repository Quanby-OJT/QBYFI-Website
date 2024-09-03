import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityStep5Component } from './availability-step5.component';

describe('AvailabilityStep5Component', () => {
  let component: AvailabilityStep5Component;
  let fixture: ComponentFixture<AvailabilityStep5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvailabilityStep5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvailabilityStep5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

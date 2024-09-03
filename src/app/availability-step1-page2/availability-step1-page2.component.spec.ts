import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityStep1Page2Component } from './availability-step1-page2.component';

describe('AvailabilityStep1Page2Component', () => {
  let component: AvailabilityStep1Page2Component;
  let fixture: ComponentFixture<AvailabilityStep1Page2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvailabilityStep1Page2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvailabilityStep1Page2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

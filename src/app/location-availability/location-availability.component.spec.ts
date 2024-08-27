import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationAvailabilityComponent } from './location-availability.component';

describe('LocationAvailabilityComponent', () => {
  let component: LocationAvailabilityComponent;
  let fixture: ComponentFixture<LocationAvailabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationAvailabilityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocationAvailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

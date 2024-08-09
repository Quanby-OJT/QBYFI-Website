import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilityLayoutComponent } from './availability-layout.component';

describe('AvailabilityLayoutComponent', () => {
  let component: AvailabilityLayoutComponent;
  let fixture: ComponentFixture<AvailabilityLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvailabilityLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvailabilityLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

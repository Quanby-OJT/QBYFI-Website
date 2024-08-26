import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulatorycomplianceComponent } from './regulatorycompliance.component';

describe('RegulatorycomplianceComponent', () => {
  let component: RegulatorycomplianceComponent;
  let fixture: ComponentFixture<RegulatorycomplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegulatorycomplianceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegulatorycomplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

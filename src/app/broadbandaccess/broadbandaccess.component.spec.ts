import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BroadbandaccessComponent } from './broadbandaccess.component';

describe('BroadbandaccessComponent', () => {
  let component: BroadbandaccessComponent;
  let fixture: ComponentFixture<BroadbandaccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BroadbandaccessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BroadbandaccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

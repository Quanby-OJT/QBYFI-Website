import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkinfastructureComponent } from './networkinfastructure.component';

describe('NetworkinsfastructureComponent', () => {
  let component: NetworkinfastructureComponent;
  let fixture: ComponentFixture<NetworkinfastructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NetworkinfastructureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NetworkinfastructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

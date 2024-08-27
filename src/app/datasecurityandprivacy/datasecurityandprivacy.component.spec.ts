import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasecurityandprivacyComponent } from './datasecurityandprivacy.component';

describe('DatasecurityandprivacyComponent', () => {
  let component: DatasecurityandprivacyComponent;
  let fixture: ComponentFixture<DatasecurityandprivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatasecurityandprivacyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatasecurityandprivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

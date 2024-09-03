import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookiesandprivacyComponent } from './cookiesandprivacy.component';

describe('CookiesandprivacyComponent', () => {
  let component: CookiesandprivacyComponent;
  let fixture: ComponentFixture<CookiesandprivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CookiesandprivacyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CookiesandprivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

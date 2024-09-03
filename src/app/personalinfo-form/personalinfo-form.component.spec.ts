import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalinfoFormComponent } from './personalinfo-form.component';

describe('PersonalinfoFormComponent', () => {
  let component: PersonalinfoFormComponent;
  let fixture: ComponentFixture<PersonalinfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonalinfoFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalinfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

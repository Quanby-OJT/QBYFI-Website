import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologicalinnovationComponent } from './technologicalinnovation.component';

describe('TechnologicalinnovationComponent', () => {
  let component: TechnologicalinnovationComponent;
  let fixture: ComponentFixture<TechnologicalinnovationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TechnologicalinnovationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TechnologicalinnovationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

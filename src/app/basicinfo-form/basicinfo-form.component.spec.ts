import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicinfoFormComponent } from './basicinfo-form.component';

describe('BasicinfoFormComponent', () => {
  let component: BasicinfoFormComponent;
  let fixture: ComponentFixture<BasicinfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BasicinfoFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicinfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

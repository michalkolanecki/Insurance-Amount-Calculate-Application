import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceFormComponent } from './insurance-form.component';

describe('InsuranceFormComponentComponent', () => {
  let component: InsuranceFormComponent;
  let fixture: ComponentFixture<InsuranceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

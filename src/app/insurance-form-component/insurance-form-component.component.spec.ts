import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceFormComponentComponent } from './insurance-form-component.component';

describe('InsuranceFormComponentComponent', () => {
  let component: InsuranceFormComponentComponent;
  let fixture: ComponentFixture<InsuranceFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceFormComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

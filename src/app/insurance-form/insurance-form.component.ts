import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InstallmentNumber, InsuranceForm } from '../interfaces/insurance-form';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-insurance-form-component',
  templateUrl: './insurance-form.component.html',
  styleUrls: ['./insurance-form.component.css']
})
export class InsuranceFormComponent implements OnInit {

  result: number = 0;
  stateDamage: boolean = false;
  insuranceForm!: FormGroup;


  constructor(private fb: FormBuilder) {}


  ngOnInit(): void {
    this.formInit();
  }

  formInit(): void {
    this.insuranceForm = this.fb.group({
      insurancePrice: 100,
      installment: this.fb.group({
        oneInstallment: 1,
        twoInstallments: 2,
        fourInstallments: 4
      }, Validators.required),
      state: this.fb.group({
        noDamage: true,
        doneDamage: false
      })
    });
  }



  isNoDamageInsurance(): void {
    
  }

  isDamageInsurance(): void {
    
  }

  onOnePayment(): void {

  }

  onMultiInstallmentsPayment(): void {

  }

  calculateResult(): void {
    //event prevent default
    console.log(this.insuranceForm);

  }

  //switch case to calculate insurance amount
  // 100-1000: 20 PLN
  // 1001-3000: 70 PLN
  // 3001-6000: 130 PLN
  // 6001-9000: 180 PLN
  // 9001-10000: 200 PLN


}

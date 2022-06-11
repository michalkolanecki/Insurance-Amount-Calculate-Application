import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-insurance-form-component',
  templateUrl: './insurance-form-component.component.html',
  styleUrls: ['./insurance-form-component.component.css']
})
export class InsuranceFormComponentComponent implements OnInit {

  insuranceForm = new FormGroup({

    insurancePrice: new FormControl(''),
    numberOfInstallments: new FormControl(''),
    state: new FormControl('')

  });


  ngOnInit(): void {
  }

}

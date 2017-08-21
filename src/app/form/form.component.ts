import { CustomValidationService } from './../shared/serivces/custom-validation.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent  {

  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  private createForm() {
    this.form = this.fb.group({
      inputString: ['', [Validators.required]],
      inputNumber: ['', [Validators.required, CustomValidationService.numberValidator]],
      inputDecimal: ['', [Validators.required, CustomValidationService.decimalValidator]],
      inputRadio: ['', Validators.required]
    });
  }

  public onsubmit(form: FormGroup) {
    if (form.invalid) {
      this.activeInvalidForm();
      return;
    }
    this.submited();
  }

  private submited() {
    console.log('Sumited!');
    console.log(this.form.value);
  }

  private activeInvalidForm() {
    const formControls: any = this.form.controls;
    for (const key in formControls) {
      if (formControls.hasOwnProperty(key) && formControls[key].invalid) {
        const formControl: FormControl = formControls[key];
        formControl.markAsTouched();
      }
    }
  }
}

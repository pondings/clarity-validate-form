import { ModalComponent } from './modal/modal.component';
import { element } from 'protractor';
import { CustomValidationService } from './shared/serivces/custom-validation.service';
import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, RadioControlValueAccessor } from '@angular/forms';
import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(ModalComponent) modalComponent: ModalComponent;

  public openModal() {
    this.modalComponent.openModal();
  }

}

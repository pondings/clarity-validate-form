import { CustomValidationService } from './shared/serivces/custom-validation.service';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidatorDirective } from './shared/directives/validator.directive';

import { ClarityModule, ClrModalModule } from 'clarity-angular';
import { MyDatePickerModule } from 'mydatepicker';
import { FormComponent } from './form/form.component';
import { ModalComponent } from './modal/modal.component';



@NgModule({
  declarations: [
    AppComponent,
    ValidatorDirective,
    FormComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ClarityModule.forRoot(),
    ClrModalModule,
    MyDatePickerModule,
    CoreModule
  ],
  providers: [CustomValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

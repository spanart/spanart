import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LogoScreenComponent } from './logo-screen/logo-screen.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { StepperComponent } from './stepper/stepper.component';
import { CdkStepperModule } from '@angular/cdk/stepper';


@NgModule({
  declarations: [
    LogoScreenComponent,
    StepperComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    CdkStepperModule
  ],
  exports: [
    FontAwesomeModule,
    LogoScreenComponent,
    FlexLayoutModule,
    ReactiveFormsModule,
    StepperComponent,
    CdkStepperModule
  ]
})
export class SharedModule { }

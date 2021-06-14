import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LogoScreenComponent } from './logo-screen/logo-screen.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LogoScreenComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  exports: [
    FontAwesomeModule,
    LogoScreenComponent,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }

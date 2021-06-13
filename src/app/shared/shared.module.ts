import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LogoScreenComponent } from './logo-screen/logo-screen.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    LogoScreenComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FlexLayoutModule,
    
  ],
  exports: [
    FontAwesomeModule,
    LogoScreenComponent,
    FlexLayoutModule
  ]
})
export class SharedModule { }

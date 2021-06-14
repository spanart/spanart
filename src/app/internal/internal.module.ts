import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalRoutingModule } from './internal-routing.module';
import { AccountsComponent } from './accounts/accounts.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { NewAccountComponent } from './accounts/new-account/new-account.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxFileDropModule } from 'ngx-file-drop';
import { MatStepperModule } from '@angular/material/stepper';


@NgModule({
  declarations: [
    AccountsComponent,
    HeaderComponent,
    NewAccountComponent,
  ],
  imports: [
    CommonModule,
    InternalRoutingModule,
    SharedModule,
    MatDialogModule,
    NgxFileDropModule,
    MatStepperModule
  ]
})
export class InternalModule { }

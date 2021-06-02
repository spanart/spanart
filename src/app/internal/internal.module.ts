import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalRoutingModule } from './internal-routing.module';
import { AccountsComponent } from './accounts/accounts.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AccountsComponent
  ],
  imports: [
    CommonModule,
    InternalRoutingModule,
    SharedModule
  ]
})
export class InternalModule { }

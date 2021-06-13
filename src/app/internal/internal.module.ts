import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InternalRoutingModule } from './internal-routing.module';
import { AccountsComponent } from './accounts/accounts.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { NewAccountComponent } from './accounts/new-account/new-account.component';


@NgModule({
  declarations: [
    AccountsComponent,
    HeaderComponent,
    NewAccountComponent,
  ],
  imports: [
    CommonModule,
    InternalRoutingModule,
    SharedModule
  ]
})
export class InternalModule { }

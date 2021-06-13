import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccountComponent } from './account.component';
import { AccountCreateComponent } from './account-create/account-create.component';
import { AccountEditComponent } from './account-edit/account-edit.component';
import { AccountViewComponent } from './account-view/account-view.component';
import { AccountRoutingModule } from './account-routing.module';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AmountTransferComponent } from './amount-transfer/amount-transfer.component';
import { AgGridModule } from 'ag-grid-angular';






@NgModule({
  declarations: [
    
    AccountViewComponent,
    AccountEditComponent,
    AccountComponent,
    AccountCreateComponent,
    AccountDetailsComponent,
    AmountTransferComponent,
],
  imports: [
   CommonModule,
   FormsModule,
   ReactiveFormsModule,
   AccountRoutingModule,
   AgGridModule.withComponents([])
   
  ],
  providers: []
  
 
})
export class AccountModule { }

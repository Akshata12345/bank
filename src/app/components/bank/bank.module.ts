import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BankCreateComponent } from './bank-create/bank-create.component';
import { BankEditComponent } from './bank-edit/bank-edit.component';
import { BankViewComponent } from './bank-view/bank-view.component';
import { BankComponent } from './bank.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BankRoutingModule } from './bank-routing.module';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
   BankCreateComponent,
   BankEditComponent,
   BankViewComponent,
   BankComponent
],
  imports: [
   CommonModule,
   BankRoutingModule,
   FormsModule,
   ReactiveFormsModule,
   AgGridModule.withComponents([])
],
  providers: []
  
 
})
export class BankModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankCreateComponent } from './bank-create/bank-create.component';
import { BankEditComponent } from './bank-edit/bank-edit.component';
import { BankViewComponent } from './bank-view/bank-view.component';
import { BankComponent } from './bank.component';


const routes: Routes = [
{path:'',component:BankComponent,children:[
        { path: '', pathMatch: 'full', redirectTo: 'create-bank' },
        { path: 'create-bank', component: BankCreateComponent },
        { path: 'edit-bank/:id', component: BankEditComponent },
        { path: 'bank-view', component: BankViewComponent },
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankRoutingModule { }

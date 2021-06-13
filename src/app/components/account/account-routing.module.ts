import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountCreateComponent } from './account-create/account-create.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AccountEditComponent } from './account-edit/account-edit.component';
import { AccountViewComponent } from './account-view/account-view.component';
import { AccountComponent } from './account.component';
import { AmountTransferComponent } from './amount-transfer/amount-transfer.component';



const routes: Routes = [
    
        {path:'',component:AccountComponent,children:[
        { path: '', pathMatch: 'full', redirectTo: 'create-account' },
        {path:'create-account',component: AccountCreateComponent},
        { path: 'account-view', component: AccountViewComponent },
        { path: 'edit-account/:id', component: AccountEditComponent },
        { path:'details',component:AccountDetailsComponent},
        { path: 'transfer' , component:AmountTransferComponent}
   ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }

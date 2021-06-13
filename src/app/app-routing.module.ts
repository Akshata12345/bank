import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthGuard } from './components/auth/auth.guard';
import { BankComponent } from './components/bank/bank.component';
import { AccountComponent } from './components/account/account.component';
import { BankCreateComponent } from './components/bank/bank-create/bank-create.component';


const routes: Routes = [
  {
    path: '' , component: HomeComponent,
    children : [
      {path: 'login' , component:SignInComponent},
      {path: 'signUp' , component:SignUpComponent}
    ]
  },
  {
    path: 'userprofile', component:UserProfileComponent,canActivate:[AuthGuard]
  },
  {
    path: '' , component: UserProfileComponent,
    children : [
      {path:'bank',loadChildren:()=>import('./components/bank/bank.module').then(module=>module.BankModule)},
      {path:'account',loadChildren:()=>import('./components/account/account.module').then(module=>module.AccountModule)}
    ]
  }
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

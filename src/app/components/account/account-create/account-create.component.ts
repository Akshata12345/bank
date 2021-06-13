import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';

import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { NgZone } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { AccountapiService } from 'src/app/shared/accountapi.service';
import { GridOptions } from 'ag-grid-community';


@Component({
  selector: 'app-account-create',
  templateUrl: './account-create.component.html',
  styleUrls: ['./account-create.component.css']
})
export class AccountCreateComponent implements OnInit {

  submitted = false;
  gridOptions:GridOptions;
  Bank:any = [];
  selectedBankId: any;
  

  accountForm=new FormGroup({
    name: new FormControl(),
    bank: new FormControl(),
   
    AccountType: new FormControl(),
    AccountNo: new FormControl()})

  
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService,
    private AccountapiService:AccountapiService 
    
  ) {  }

  
  ngOnInit() {
    this.apiService.getBanks().subscribe((data: any) => {
      console.log(this.Bank = data);
     })    

  }
mainForm() {
  this.accountForm = this.fb.group({
    name: ['',[Validators.required,Validators.minLength(3)]],
    bank: [''],
 
    AccountType: ['',[Validators.required]],
    AccountNo: ['']
  })
}
 setBankDetails(){
   console.log(this.selectedBankId);
    const bank=this.Bank.some((x: { name: any; })=> x.name===this.selectedBankId);
   if(bank)
    this.accountForm.controls.bankId.setValue(bank._Id);

  }

 

onSubmit() {
  this.submitted = true;
  if (!this.accountForm.valid) {
    return false;
  } else {
    this.AccountapiService.createAccount(this.accountForm.value).subscribe(
      (res: any) => {
        console.log('Account is successfully created!');
        
        this.ngZone.run(() => this.router.navigateByUrl('/account/account-view'))
      }, (error: any) => {
        console.log(error);
      });
  }
}
}
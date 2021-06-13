import { Router } from '@angular/router';
import { Component, OnInit,NgZone } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { ApiService } from 'src/app/shared/api.service';
import { AccountapiService } from 'src/app/shared/accountapi.service';

@Component({
  selector: 'app-amount-transfer',
  templateUrl: './amount-transfer.component.html',
  styleUrls: ['./amount-transfer.component.css']
})
export class AmountTransferComponent implements OnInit {

  submitted = false;
  Bank:any = [];
  selectedBankId: any;

  transferForm=new FormGroup({
    bank:new FormControl(),
    AccountNo:new FormControl(),
    ifsccode:new FormControl(),
    name:new FormControl(),
    amount:new FormControl()


  })

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService,
    private AccountapiService:AccountapiService
  ) { }

  ngOnInit(): void {
    this.apiService.getBanks().subscribe((data: any) => {
      console.log(this.Bank = data);
     }) 
  }
    
  setBankDetails(){
    console.log(this.selectedBankId);
     const bank=this.Bank.some((x: { name: any; })=> x.name===this.selectedBankId);
    if(bank)
     this.transferForm.controls.bankId.setValue(bank._Id);
 
   }

   onSubmit() {
    this.submitted = true;
    if (!this.transferForm.valid) {
      return false;
    } else {
      this.AccountapiService.createAccount(this.transferForm.value).subscribe(
        (res: any) => {
          console.log('Account is successfully created!');
          
          this.ngZone.run(() => this.router.navigateByUrl('/account/account-view'))
        }, (error: any) => {
          console.log(error);
        });
    }
  }

}

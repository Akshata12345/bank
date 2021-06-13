import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Account } from 'src/app/model/account';
import { FormGroup, FormBuilder, Validators,FormControl } from "@angular/forms";
import { AccountapiService } from 'src/app/shared/accountapi.service';
import { ApiService } from 'src/app/shared/api.service';


@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
  styleUrls: ['./account-edit.component.css']
})
export class AccountEditComponent implements OnInit {
  submitted = false;
  Bank:any=[];
  selectedBankId: any;
  accountData: Account[];
  editForm=new FormGroup({
    name: new FormControl(),
    bank: new FormControl(),
    AccountType: new FormControl(),
    AccountNo: new FormControl()})



  constructor(
    public fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private accountapiService: AccountapiService,
    private router: Router,
    private apiService: ApiService,
  ) { }
 

  ngOnInit() {
    
    this.updateAccount();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getAccount(id);
    this.editForm = this.fb.group({
      name: [''],
      bank: [''],
      AccountType: [''],
      AccountNo: ['']
    })
     this.apiService.getBanks().subscribe((data: any) => {
       this.Bank = data;
      })    
  }
  get myForm(){
    return this.editForm.controls;
  }
  getAccount(id: string) {
    this.accountapiService.getAccount(id).subscribe((data: { [x: string]: any; }) => {
      this.editForm.setValue({
        name: data['name'],
        bank: data['bank'],
        AccountType: data['AccountType'],
        AccountNo: data['AccountNo'],
      });
    });
  }

  updateAccount() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      bank: ['', [Validators.required]],
      AccountType: ['', [Validators.required]],
      AccountNo: ['', [Validators.required]]
     
    })
  }
   setBankDetails(){
     console.log(this.selectedBankId);
      const bank=this.Bank.some((x: { name: any; })=> x.name===this.selectedBankId);
      if(bank)
      this.editForm.controls.bankId.setValue(bank._Id);
  
   }
  onSubmit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      return false;
    } else {
      if (window.confirm('Are you sure?')) {
        let id = this.actRoute.snapshot.paramMap.get('id');
        this.accountapiService.updateAccount(id, this.editForm.value)
          .subscribe((res: any) => {
            this.router.navigateByUrl('/account/account-view');
            console.log('Content updated successfully!')
          }, (error: any) => {
            console.log(error)
          })
      }
    }
  }

}

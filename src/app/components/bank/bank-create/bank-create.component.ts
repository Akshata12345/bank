import { Router } from '@angular/router';
import { Component, OnInit,NgZone } from '@angular/core';

import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { ApiService } from 'src/app/shared/api.service';


@Component({
  selector: 'app-bank-create',
  templateUrl: './bank-create.component.html',
  styleUrls: ['./bank-create.component.css']
})
export class BankCreateComponent implements OnInit {
  
  submitted = false;
  bankForm=new FormGroup({
    name:new FormControl(),
    branch:new FormControl(),
    ifsccode:new FormControl(),
    micrcode:new FormControl(),
    location:new FormControl()


  })

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) { this.mainForm(); }

  ngOnInit() {
  }
  mainForm() {
    this.bankForm = this.fb.group({
      name: ['', [Validators.required,Validators.minLength(3)]],
      branch: ['', [Validators.required]],
      ifsccode: ['', [Validators.required,Validators.minLength(11),Validators.pattern('^[A-Z]{4}0[A-Z0-9]{6}$')]],
      micrcode: ['', [Validators.required,Validators.minLength(9)]],
      location: ['', [Validators.required]]
    })
  }
   
 
  onSubmit() {
    this.submitted = true;
    if (!this.bankForm.valid) {
      return false;
    } else {
      this.apiService.createBank(this.bankForm.value).subscribe(
        (res:any) => {
          console.log('Bank is successfully created!');
          
          this.ngZone.run(() => this.router.navigateByUrl('/bank/bank-view'))
        }, (error:any) => {
          console.log(error);
        });
    }
  }

}

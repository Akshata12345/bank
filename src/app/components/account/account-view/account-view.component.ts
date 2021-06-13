import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { AccountapiService } from 'src/app/shared/accountapi.service';


@Component({
  selector: 'app-account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.css']
})
export class AccountViewComponent implements OnInit {

  gridOptions: GridOptions;
  Account:any = [];

  columnDefs = [
    {
        headerName: "Name",
        field: "name",
        width: 100,
        sortable: true ,
        filter: true,  
        suppressMenu: true
    },
    {
        headerName: "Bank",
        field: "bank",
        width: 150,
        sortable: true ,
        filter: true,  
        suppressMenu: true
    },
    {
      headerName: "AccountType",
      field: "AccountType",
      width: 150,
      sortable: true ,
      filter: true,  
      suppressMenu: true
  },
  {
    headerName: "AccountNo",
    field: "AccountNo",
    width: 150,
    sortable: true ,
    filter: true,  
    suppressMenu: true
},
];
rowData : any;

  constructor(private accountapiService: AccountapiService) { 
    // this.readAccount();
  }

  ngOnInit() {
    this.rowData = this.accountapiService.getAccounts();
  }
  // readAccount(){
    
  //   this.accountapiService.getAccounts().subscribe((data) => {
  //    this.Account = data;
  //   })    
  // }

  removeAccount(account: { _id: any; }, index: any) {
    if(window.confirm('Are you sure?')) {
        this.accountapiService.deleteAccount(account._id).subscribe((data: any) => {
          this.Account.splice(index, 1);
        }
      )    
    }
  }


}
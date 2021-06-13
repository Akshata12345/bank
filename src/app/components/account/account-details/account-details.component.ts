import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { AccountDetailsApiService } from 'src/app/shared/account-details-api.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent implements OnInit {
  [x: string]: any;
  gridOptions: GridOptions;
  balance = 30000;
  prevBal = this.balance;

  columnDefs = [
    {
      headerName: "slNo",
      field: "slNo",
      width: 70,
      sortable: true,
      filter: true,

    },
    {
      headerName: "transactionNo",
      field: "transactionNo",
      width: 150,
      sortable: true,
      filter: true,

    },
    {
      headerName: "transaction",
      field: "transaction",
      width: 150,
      sortable: true,
      filter: true,

    },
    {
      headerName: "credit",
      field: "credit",
      width: 100,
      sortable: true,
      filter: true,

    },
    {
      headerName: "debit",
      field: "debit",
      width: 100,
      sortable: true,
      filter: true,

    },
    {
      headerName: "total",
      field: "previousBal",
      width: 100,
      sortable: true,
      filter: true,


    }



  ];
  rowData: any;

  constructor(private accountDetailsApiService: AccountDetailsApiService) { }

  ngOnInit() {
   this.getAccountsDetails();
    // this.rowData = this.accountDetailsApiService. getAccountsDetails();
    // this.rowData[this.total]=this.rowData;
  }
  getAccountsDetails(): void {
    this.accountDetailsApiService.getAccountsDetails().subscribe((res: any) => {
     res= res.sort((a: { slNo: string | number; },b: { slNo: string | number; }) => (+a.slNo < +b.slNo) ? 1 : ((+b.slNo < +a.slNo) ? -1 : 0) );
      let prevBal = this.balance;
      let prevAggregatorValue = 0;
     res = res.map((row: { previousBal: number; credit: number; debit: string | number; }) => {
        prevBal = prevBal + prevAggregatorValue;
        row.previousBal = prevBal;
        prevAggregatorValue = (-row.credit) + (+row.debit);
        return row;
      });
      this.rowData= res.sort((a: { slNo: string | number; },b: { slNo: string | number; }) => (+a.slNo > +b.slNo) ? 1 : ((+b.slNo > +a.slNo) ? -1 : 0) );
    });
}

}


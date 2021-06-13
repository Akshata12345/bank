import { Component, OnInit } from '@angular/core';
import { GridOptions } from "ag-grid-community";
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-bank-view',
  templateUrl: './bank-view.component.html',
  styleUrls: ['./bank-view.component.css']
})
export class BankViewComponent implements OnInit {

  bank(bank: any, index: (Bank: any, index: any) => void) {
    throw new Error('Method not implemented.');
  }
  index(Bank: any, index: any) {
    throw new Error('Method not implemented.');
  }
   gridOptions: GridOptions;
  Bank:any = [];
  columnDefs = [
    {
        headerName: "BankName",
        field: "name",
        width: 150,
        sortable: true ,
        filter: true,  
        
    },
    {
        headerName: "Branch",
        field: "branch",
        width: 100,
        sortable: true ,
        filter: true,  
        
    },
    {
      headerName: "IFSCCode",
      field: "ifsccode",
      width: 150,
      sortable: true ,
      filter: true,  
     
  },
  {
    headerName: "MICRCode",
    field: "micrcode",
    width: 150,
    sortable: true ,
    filter: true,  
   
},
  {
    headerName: "Location",
    field: "location",
    width: 100,
    sortable: true ,
    filter: true,  

},

{ field: '_id', suppressSizeToFit: true , width:  100 , headerName: 'Edit',
        cellRenderer: (params:any) => {
          return `Edit`;
        },
        onCellClicked: (params:any) => {
          this.router.navigateByUrl('/bank/edit-bank/');
        }
      },
      { field: '_id', suppressSizeToFit: true , width:  100 , headerName: 'Delete',
      cellRenderer: (params:any) => {
        return `delete`;
      },
      onCellClicked: (params:any) => {
        this.removeBank(this.bank,this.index);
        
      }
    }


];
   rowData : any;
  constructor(private apiService: ApiService, private router : Router) {
    // this.readBank();
    // this.gridOptions = <GridOptions>{
     
     
    // };
    // this.gridOptions.
   }
   

  ngOnInit() {
    this.rowData = this.apiService.getBanks();
  
    
  }
  // readBank(){
    
  //   this.apiService.getBanks().subscribe((data) => {
  //    this.Bank = data;
  //   })    
  // }

  removeBank(bank: { (bank: any, index: (Bank: any, index: any) => void): void; _id?: any; }, index: (Bank: any, index: any) => void) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteBank(bank._id).subscribe((data) => {
          this.Bank.splice(index, 1);
        }
      )    
    }
  }

 
  

}

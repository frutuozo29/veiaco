import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-debts',
  templateUrl: './debts.component.html',
  styleUrls: ['./debts.component.css']
})
export class DebtsComponent implements OnInit {

  columnDefs = [
    { headerName: 'Debt description', field: 'debt' },
    { headerName: 'Company', field: 'company' },
    { headerName: 'Value', field: 'value' }
  ];

  rowData = [
    { debt: 'Appartment', company: 'Imobil company rent', value: 35000 },
    { debt: 'Food', company: 'Food of Month', value: 32000 },
    { debt: 'Water', company: 'Water Accont', value: 72000 }
  ];

  constructor() { }

  ngOnInit() {
  }

}

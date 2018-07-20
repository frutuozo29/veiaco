import { RepositoryBaseService } from './../../repository/base/repository-base.service';
import { Component, OnInit } from '@angular/core';
import { Debt } from './shared/debt';

@Component({
  selector: 'app-debts',
  templateUrl: './debts.component.html',
  styleUrls: ['./debts.component.css']
})
export class DebtsComponent implements OnInit {

  debts: any;

  columnDefs = [
    { headerName: 'Id', field: '_id' },
    { headerName: 'Name', field: 'name' },
    { headerName: 'Value', field: 'value' }
  ];

  rowData: any;

  constructor(
    private repository: RepositoryBaseService
  ) {
    
  }

  ngOnInit() {
    this.repository.getAll()
      .subscribe(data => {
        this.debts = data.debts;
      })
  }

}

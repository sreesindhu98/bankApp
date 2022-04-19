import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
acno:any;
transaction:any;
types:any
  constructor(private ts:DataService) { 
    this.acno=this.ts.currentAcno
    this.transaction=this.ts.transaction(this.acno)
    this.types=this.ts.type
    console.log(this.transaction);
    
  }
   
  ngOnInit(): void {
  }

}

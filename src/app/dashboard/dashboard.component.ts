import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
dacno=""
wacno=""
pswd=""
pswd1=""
damount=""
wamount=""
  constructor(private de:DataService) { }

  ngOnInit(): void {
  }

  deposit(){
    var acno=this.dacno
    var pswd=this.pswd
    var amount=this.damount
    const result=this.de.deposit(acno,pswd,amount)
    if(result){
      alert(amount +"is successfully added    ... Available Balance is" +result)
    }
  }
  withdraw(){
    var acno=this.wacno
    var pswd=this.pswd1
    var amount=this.wamount
    const result=this.de.withdraw(acno,pswd,amount)
    if(result){
      alert(amount +"is successfully withdrawed    ... Available Balance is" +result)
    }
  }
}

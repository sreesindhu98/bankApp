import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user:any
// dacno=""
// wacno=""
// pswd=""
// pswd1=""
// damount=""
// wamount=""
depositForm=this.fb.group({
 
  dacno:['',[Validators.required,Validators.pattern('[0-9 ]*')]],
  pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9@$# ]*')]],
  damount:['',[Validators.required,Validators.pattern('[0-9]*')]]
})
withdrawForm=this.fb.group({
  
  wacno:['',[Validators.required,Validators.pattern('[0-9 ]*')]],
  pswd1:['',[Validators.required,Validators.pattern('[a-zA-Z0-9@$# ]*')]],
  wamount:['',[Validators.required,Validators.pattern('[0-9]*')]],
})
  constructor(private de:DataService,private fb:FormBuilder,private router:Router) { 
    this.user=this.de.currentUser;
  }

  ngOnInit(): void {
   if(!(localStorage.getItem("currentAcno"))){
    alert("Please Login First!!!");
    this.router.navigateByUrl("")
   }
   
  }
  

  deposit(){
    var acno=this.depositForm.value.dacno
    var pswd=this.depositForm.value.pswd
    var amount=this.depositForm.value.damount
   if(this.depositForm.valid){
    const result=this.de.deposit(acno,pswd,amount)
    if(result){
      alert(amount +"is successfully added    ... Available Balance is" +result)
    }
   }
   else{
     alert("Invalid Form")
   }
  }
  withdraw(){
    var acno=this.withdrawForm.value.wacno
    var pswd=this.withdrawForm.value.pswd1
    var amount=this.withdrawForm.value.wamount
    
    if(this.withdrawForm.valid){
      const result=this.de.withdraw(acno,pswd,amount)
    if(result){
      alert(amount +"is successfully withdrawed    ... Available Balance is" +result)
    }
     }
     else{
       alert("Invalid Form")
     }
  }
  logout(){
    localStorage.removeItem("currentAcno")
    localStorage.removeItem("currentUser")
    this.router.navigateByUrl("")
  }
}

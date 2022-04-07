import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="Your best banking partner"
  accno="Account number please!"
  acno=""
  pswd=""
// database
database:any={
  1000:{accno:1000,uname:"sree",password:123,balance:3000},
  1001:{accno:1000,uname:"sree",password:123,balance:4000},
  1002:{accno:1000,uname:"sree",password:123,balance:5000}
}
  constructor(private route:Router, private db:DataService) { }

  ngOnInit(): void {
   
  }
  acnoChange(event:any){
    this.acno=event.target.value
    console.log(this.acno);
    
  }
  pswdChange(event:any){
    this.pswd=event.target.value
    console.log(this.pswd);
    
  }
  //Event binding with $event     ,  Two way binding
  login(){
    // alert("Login clicked")
    var acno=this.acno;
    var pswd=this.pswd;
   let database=this.db.database;
   if(acno in database){
     if(pswd==database[acno]["password"]){
       alert("Login successful!!")
       this.route.navigateByUrl("dashboard")
     }
     else{
       alert("Incorrect password!")
     }

   }
   else{
     alert("User doesn't exist!")
   }
      
  }

  // template referencing method
  // login(a:any,b:any){
  //   // alert("Login clicked")
  //   var acno=a.value;
  //   var pswd=b.value;
  //  let database=this.database;
  //  if(acno in database){
  //    if(pswd==database[acno]["password"]){
  //      alert("Login successful!!")
  //    }
  //    else{
  //      alert("Incorrect password!")
  //    }

  //  }
  //  else{
  //    alert("User doesn't exist!")
  //  }
      
  // }
}

import { Component, OnInit } from '@angular/core';

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
  constructor() { }

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
  login(){
    // alert("Login clicked")
    var acno=this.acno;
    var pswd=this.pswd;
   let database=this.database;
   if(acno in database){
     if(pswd==database[acno]["password"]){
       alert("Login successful!!")
     }
     else{
       alert("Incorrect password!")
     }

   }
   else{
     alert("User doesn't exist!")
   }
      
  }
}

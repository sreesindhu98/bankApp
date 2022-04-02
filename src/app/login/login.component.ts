import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  aim="Your data is displayed"
  accno="Account number please!"
  acno=""
  pswd=""
// database
dtabase={
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
    alert("Login clicked")
      
  }
}

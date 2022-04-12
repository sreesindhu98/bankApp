import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  // acno=""
  // pswd=""
// database

  constructor(private route:Router, private db:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
   
  }
  // acnoChange(event:any){
  //   this.acno=event.target.value
  //   console.log(this.acno);
    
  // }
  // pswdChange(event:any){
  //   this.pswd=event.target.value
  //   console.log(this.pswd);
    
  // }
  loginForm=this.fb.group({
    acno:[''],
    pswd:['']
  })
  //Event binding with $event     ,  Two way binding

  login(){
    // alert("Login clicked")
    var acno=this.loginForm.value.acno;
   
    
    //this.acno;
    var pswd=this.loginForm.value.pswd
    // this.pswd;
   
    // console.log(this.loginForm.value);
    
   
   const result=this.db.login(acno,pswd)
   if(result){
     alert("Login Successfully")
     this.route.navigateByUrl("dashboard")
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

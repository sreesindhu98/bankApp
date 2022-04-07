import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
acno=""
pswd=""
uname=""
  constructor(private db:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  register(){
   var acno=this.acno;
   var uname=this.uname;
   var pswd=this.pswd;
   const result=this.db.register(uname,acno,pswd)
   if(result){
     alert("Registered Successfully")
     this.router.navigateByUrl("")
   }
   else{
     alert("User Already exist...Please Login")
   }

  }
}

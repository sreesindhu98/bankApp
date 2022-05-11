import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
// acno=""
// pswd=""
// uname=""
//Reactive form
registerForm=this.fb.group({
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
  acno:['',[Validators.required,Validators.pattern('[0-9 ]*')]],
  pswd:['',[Validators.required,Validators.pattern('[0-9 ]*')]]

  // Password: ['', [Validators.required, Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{7,}')]]
})
  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { 
    
  }

  ngOnInit(): void {
  }

  register(){
   var acno=this.registerForm.value.acno;
   var uname=this.registerForm.value.uname;
   var pswd=this.registerForm.value.pswd;
  //  console.log(this.registerForm.value.uname);
  if(this.registerForm.valid){
    this.ds.register(uname,acno,pswd)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message)
        this.router.navigateByUrl("")
      }
    },
    (result)=>{
      alert(result.error.message)
    }
    )
   
  }
  else{
    alert("Invalid Form!!")
  }
  

  }
}

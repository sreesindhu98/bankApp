import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
currentUser=""
  database:any={
    1000:{accno:1000,uname:"Sree",password:123,balance:3000},
    1001:{accno:1000,uname:"Riya",password:123,balance:4000},
    1002:{accno:1000,uname:"anu",password:123,balance:5000}
  }
  constructor() { }

register(uname:any,accno:any,password:any){
   let database=this.database;
  if(accno in database){
    return false
  }
  else{
    database[accno]={
    accno,
    uname,
    password,
    balance:0}
    console.log(database);
    
    return true
  }
}
login(acno:any,pswd:any){
  // alert("Login clicked")

 let database=this.database;
 if(acno in database){
   if(pswd==database[acno]["password"]){
     this.currentUser=database[acno]["uname"]
     return true
   }
   else{
     alert("Incorrect password!")
     return false
   }

 }
 else{
   alert("User doesn't exist!")
return false
  }
    
}
deposit(acno:any,pswd:any,amt:any){
  let amount=parseInt(amt);
  let database=this.database;

if(acno in database){

if(pswd==database[acno]["password"]){
    database[acno]["balance"]+=amount
    return database[acno]["balance"]
  }
  else{
    alert("Incorrect password");
    return false
  }}
  else{
    alert("User doesn't exist")
    return false
  }

}
withdraw(acno:any,pswd:any,amt:any){
  let amount=parseInt(amt);
  let database=this.database;

if(acno in database){

if(pswd==database[acno]["password"]){
  if(database[acno]["balance"]>amount){
    database[acno]["balance"]-=amount
    return database[acno]["balance"]
  }
  else{
    alert("Insufficient balance")
    return false
  }
  }
  else{
    alert("Incorrect password");
    return false
  }}
  else{
    alert("User doesn't exist")
    return false
  }

}
}

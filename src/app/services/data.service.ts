import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
currentUser:any
currentAcno:any
type:any
  database:any={
    1000:{acno:1000,uname:"Sree",password:123,balance:3000,transaction:[]},
    1001:{acno:1000,uname:"Riya",password:123,balance:4000,transaction:[]},
    1002:{acno:1000,uname:"anu",password:123,balance:5000,transaction:[]}
  }
  acno: any;
  constructor() { }

register(uname:any,acno:any,password:any){
   let database=this.database;
  if(acno in database){
    return false
  }
  else{
    database[acno]={
    acno,
    uname,
    password,
    balance:0,
    transaction:[]}
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
     this.currentAcno=acno
  
   
     
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
    database[acno]["transaction"].push({type:"CREDIT",amount:amount})
   this.type=database[acno]["transaction"]

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
    database[acno]["transaction"].push({type:"DEBIT",amount:amount})
    this.type=database[acno]["transaction"]

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
transaction(acno:any){  
    
    
  return this.database[acno].transaction
}
}

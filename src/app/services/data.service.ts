import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  database:any={
    1000:{accno:1000,uname:"sree",password:123,balance:3000},
    1001:{accno:1000,uname:"sree",password:123,balance:4000},
    1002:{accno:1000,uname:"sree",password:123,balance:5000}
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
}

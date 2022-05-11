import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
const options={
  headers: new HttpHeaders()
}
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
  constructor(private http:HttpClient) {
   this.getDetails()
   }
saveDetails(){
  localStorage.setItem("database",JSON.stringify(this.database));
  if(this.currentAcno){
    localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
  }
  if(this.currentUser){
    localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
  }
}
getDetails(){
  if(localStorage.getItem("database")){
    this.database=JSON.parse(localStorage.getItem("database")||'')
  }
  if(localStorage.getItem("currentAcno")){
    this.currentAcno=JSON.parse(localStorage.getItem("currentAcno")||'')
  }
  if(localStorage.getItem("currentUser")){
    this.currentUser=JSON.parse(localStorage.getItem("currentUser")||'')
  }
}
register(uname:any,acno:any,password:any){
   const data={
     uname,acno,password
   }
   return this.http.post('http://localhost:3000/register',data)
  }

login(acno:any,pswd:any){
  // alert("Login clicked")
const data={acno,pswd}
  return this.http.post('http://localhost:3000/login',data)
    
}
// Token adding to functions
getOptions(){
  const token=JSON.parse(localStorage.getItem('token')||'')
  let headers=new HttpHeaders()
  if(token){
    headers=headers.append('x-access-token',token)
    
    options.headers=headers
    
    
  }
  
  
  return options
}
deposit(acno:any,pswd:any,amt:any){
  const data={
    acno,
    pswd,
    amt
  }
  
  
  
  return this.http.post('http://localhost:3000/deposit',data,this.getOptions())
}
withdraw(acno:any,pswd:any,amt:any){
  const data={
    acno,
    pswd,
    amt
  }
  return this.http.post('http://localhost:3000/withdraw',data,this.getOptions())

}
// deposit(acno:any,pswd:any,amt:any){
//  const data={acno,pswd,amt}
//  return this.http.post('http://localhost:3000/deposit',data,this.getOptions())
// }
// withdraw(acno:any,pswd:any,amt:any){
//   const data={acno,pswd,amt}
//  return this.http.post('http://localhost:3000/withdraw',data,this.getOptions())

// }
transaction(acno:any){  
    
    
  const data={
    acno
    
  }
  return this.http.post('http://localhost:3000/transaction',data,this.getOptions())

}
onDelete(acno:any){  
    console.log(acno);
   
    
  return this.http.delete('http://localhost:3000/onDelete/'+acno,this.getOptions())

}
}

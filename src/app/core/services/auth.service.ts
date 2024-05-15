import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tick } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject,Observable } from 'rxjs';
import { LoginComponent } from 'src/app/components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser =new BehaviorSubject(null)
isLogin=new BehaviorSubject(false)

  constructor(private _HttpClient:HttpClient,private _Router:Router,private dialog:MatDialog) {
    if(localStorage.getItem('CurrentToken') !==null){
      this.decode()
    }
   }

  register(data:any):Observable<any>{
    return this._HttpClient.post("https://localhost:7098/api/Account/register", data);
  }
  login(data:any):Observable<any>{
    return this._HttpClient.post("https://localhost:7098/api/Account/login", data);
  }
  getAllUser():Observable<any>{
    return this._HttpClient.get("https://localhost:7098/api/Account/get-all-users");
  }
  deleteUser(id:any):Observable<any>{
    return this._HttpClient.delete(`https://localhost:7098/api/Account/deleteUser?userId=${id}`);
  }
  logout(){
    localStorage.removeItem('CurrentToken')
    localStorage.removeItem('UserName')
    localStorage.removeItem('UserId')
    this.currentUser.next(null)
    this.isLogin.next(false)
    this._Router.navigate(['/home'])
  }

  token:any= localStorage.getItem('CurrentToken')


  decode(){
    let encode=JSON.stringify(localStorage.getItem('CurrentToken'))
    let decoded:any=jwtDecode(encode)
    this.currentUser.next(decoded)
  }
  changePass(data:any):Observable<any>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`,
      'Content-Type': 'application/json'
    });
   return this._HttpClient.post("https://localhost:7098/api/Account/changepassword",data,{headers});
  }

}

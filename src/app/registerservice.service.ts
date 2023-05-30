import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class RegisterserviceService {
  regurl='http://192.168.1.84:8000/api/register';
  logurl='http://192.168.1.84:8000/api/login';
  constructor(private http:HttpClient) { }

  getdata(user:User){
var data= new FormData();
  data.append("name",user.name);
  data.append("phoneno",user.phoneno);
  data.append("email",user.email);
  data.append("password",user.password);
  data.append("cnfrmpswd",user.cnfrmpswd)
return this.http.post<any>(this.regurl,data);
  }
  getlog(luser:Login){
  var ldata= new FormData();  
  ldata.append("email",luser.email);
  ldata.append("password",luser.password);
  return this.http.post<any>(this.logurl,ldata);
  }
}


import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

private baseUrl='http://10.0.0.79:8080/api/v1/auth';

  constructor(private http : HttpClient) { }

register(user:any):Observable<any>{
return this.http.post(`${this.baseUrl}/register`,user);
}

authenticate(credentials:any):Observable<any>{
return this.http.post(`${this.baseUrl}/authenticate`,credentials);
}
login(credentials:any):Observable<any>{
return  this.http.post(`${this.baseUrl}/login`,credentials);
}
requestOTP(email:string):Observable<any>{
  const params=new HttpParams().set('email',email);
  return this.http.post(`${this.baseUrl}/requestOTP`,{},{params});
}

verifyOTP(email:string,emailOTP: string): Observable<any> {
  const params=new HttpParams().set('email',email).set('emailOTP',emailOTP);
  return this.http.post<any>(`${this.baseUrl}/verifyOTP`, { params });
}

resetPassword(email: string, newPassword: string) {
  const params=new HttpParams().set('email',email).set('newPassword',newPassword);
  return this.http.post(`${this.baseUrl}/resetPassword`, { params })
}


}

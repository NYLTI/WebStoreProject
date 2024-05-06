import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from '../interfaces/user';
import { error } from 'console';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ConsumerService {

  baseUrl:string = 'http://localhost:8010/v1/consumer';

  constructor(private http: HttpClient) { }

  logIn(email:string, password:string):Observable<User>{
    return this.http.post<User>(`${this.baseUrl}/login`, {email, password})
    //   .subscribe((response)=>{
    //     // console.log(response);
    //     this.user = response;
    //     console.log(this.user.id)
    //     return this.user;
    //   },
    // (error)=>{
    //   console.log(error)
    // })
    // return this.user;
  }
  signUp(user: User){
    return this.http.post<User>(`${this.baseUrl}/register`, user)
  }
}

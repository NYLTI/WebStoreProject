import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ConsumerService {

  baseUrl:string = 'http://localhost:8010/v1/consumer';

  constructor(private http: HttpClient) { }

  logIn(email:string, password:string):Observable<User>{
    return this.http.post<User>(`${this.baseUrl}/login`, {email, password})
  }
  signUp(user: User): Observable<User>{
    return this.http.post<User>(`${this.baseUrl}/register`, user)
  }
}

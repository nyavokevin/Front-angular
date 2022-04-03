import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router';
import { UserClass } from '../models/user-class.model'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  
  currentUser = {};


  constructor(private http: HttpClient, public router: Router) { }
  
  
  login(login: string, password: string) {
    const body = {
        login: login,
        password: password
      }
    return this.http
      .post<any>("api/login", body)
      .subscribe(data => {
        console.log(data)
      })
  }

  handleError(error: HttpErrorResponse) {
    let message = '';
    if (error.error instanceof ErrorEvent) {
      message = error.error.message
    } else{
      message = `Error code : ${ error.status } \nMessage: ${ error.message }`
    }
    return throwError(message)
  }
}

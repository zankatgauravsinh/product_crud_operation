import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions,URLSearchParams,Response} from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: Http) { }
  private api = 'http://localhost:3000';

  login(user){
    return this.http.post(this.api+'/login',user ).pipe(
    map((response: Response) =>{
      let user = response.json().user;
      console.log('user ==', user);
      if (user) {
        console.log('user session==', user);
        localStorage.setItem('currentUser', JSON.stringify(user));
    }
     return response.json}),
    catchError(error =>  throwError(error.json()))
    )
  };

  register(userData){
    console.log('service IS WORKING', userData)
    return this.http.post(this.api+'/register', userData )
    .pipe(
      map((response: Response) => response.json()),
      catchError(err => throwError(err))
    )};
  }


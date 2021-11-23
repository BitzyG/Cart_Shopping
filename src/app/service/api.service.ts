import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';
// import { fromFetch } from 'rxjs/fetch';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private localUrl = 'https://fakestoreapi.com/auth/login';

  constructor(private http: HttpClient) { }

  // userAPI() {
  //   return this.http.get(this.localUrl);
  // }

  // userAPI() : Observable<HttpResponse<Users[]>> {
  //   return this.http.get<Users[]>(
  //     this.localUrl, { observe: 'response' });
  // }
  loginUser(user:any){
    return this.http.post(this.localUrl, {
      username: user.user,
      password: user.password
    });
  }
}

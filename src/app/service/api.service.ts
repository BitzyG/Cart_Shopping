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

  private loginUrl = 'https://fakestoreapi.com/auth/login';
  private productsUrl = 'https://fakestoreapi.com/products';


  constructor(private http: HttpClient) { }

  // userAPI() {
  //   return this.http.get(this.localUrl);
  // }

  // userAPI() : Observable<HttpResponse<Users[]>> {
  //   return this.http.get<Users[]>(
  //     this.localUrl, { observe: 'response' });
  // }
  loginUser(user:any){
    return this.http.post(this.loginUrl, {
      username: user.user,
      password: user.password
    });
  }

  // getProducts(){
  //   return this.http.get('https://fakestoreapi.com/products')
  // }

  getProducts() : Observable<HttpResponse<any>> {
    return this.http.get(
      this.productsUrl, { observe: 'response' });
  }

}

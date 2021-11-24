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
  private jewerlyProducts = 'https://fakestoreapi.com/products/category/jewelery';
  private electronicsProducts = 'https://fakestoreapi.com/products/category/electronics';
  private mansProducts = "https://fakestoreapi.com/products/category/men's%20clothing";
  private womenProducts = "https://fakestoreapi.com/products/category/women's%20clothing";
  private userCollection = 'https://fakestoreapi.com/users';


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

  getJewels() : Observable<HttpResponse<any>> {
    return this.http.get(
      this.jewerlyProducts, { observe: 'response' });
  }

  getElectronics() : Observable<HttpResponse<any>> {
    return this.http.get(
      this.electronicsProducts, { observe: 'response' });
  }

  getMenClothing() : Observable<HttpResponse<any>> {
    return this.http.get(
      this.mansProducts, { observe: 'response' });
  }

  getWomanClothing() : Observable<HttpResponse<any>> {
    return this.http.get(
      this.womenProducts, { observe: 'response' });
  }

  getUser() : Observable<HttpResponse<any>> {
    return this.http.get(
      this.userCollection, { observe: 'response' });
  }

}

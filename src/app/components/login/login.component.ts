import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from 'rxjs/operators';
// import { Users } from 'src/app/components/login/headers'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {


  logInForm = new FormGroup({
    user: new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)
  })
  // user: Users[] | any = [];

  constructor(private api: ApiService, public router: Router,
  //  headers?: HttpHeaders, context?: HttpContext,  params?: HttpParams
  ) { }

  ngOnInit(): void {
    // this.userLogin()
    this.login()
  }

  login(){
    this.api.loginUser(this.logInForm.value).subscribe(data =>{
      console.log(JSON.stringify(data))
      localStorage.setItem('token', JSON.stringify(data)),
      this.router.navigateByUrl('home');
    })
  }

  aVer(){
    console.log(this.logInForm.value);
  }
  // userLogin() {
  //   this.api.userLogin()
  //     .subscribe(resp => {
  //       console.log(resp);
  //       const keys = resp.headers.keys();
  //       this.user = keys.map(key =>
  //         `${key}: ${resp.headers.get(key)}`);
        // for (const d of (data as any)) {
          // this.user.push({
            // username: d.name,
        //     price: d.price
          // });
        // }
  //     });
  // }



  //               username: "mor_2314",
  //               password: "83r5^_"
}


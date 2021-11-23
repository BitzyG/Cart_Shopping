import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  user={
    email: '',
    password: '',
    phone: '',
    code: '',
  }

  constructor() { }

  ngOnInit(): void {
  }

}


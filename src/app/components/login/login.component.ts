import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  // user={
  //   email: '',
  //   password: '',
  //   phone: '',
  //   code: '',
  // }

  user: any = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.userLogn()
  }

  userLogn() {
    this.api.userAPI()
      .subscribe(data => {
        console.log(data);
        // for (const d of (data as any)) {
        //   this.user.push({
        //     username: d.name,
        //     price: d.price
        //   });
        // }
      });
  }

}


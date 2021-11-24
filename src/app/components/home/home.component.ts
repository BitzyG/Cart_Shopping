import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  products: any = [];
  // jewels: any = [];
  // electronics: any = [];

  constructor(private api: ApiService,) { }

  ngOnInit(): void {
    this.getProducts();
    // this.getProductsJewels()
  }

  getProducts() {
    this.api.getProducts().subscribe(resp => {
      console.log(resp.body);
      this.products= [];
      resp.body.forEach((element:any) => {
        this.products.push({
          title: element.title,
          category: element.category,
          description: element.description,
          id: element.id,
          image: element.image,
          price: element.price,
        })
        console.log(this.products);
      })
    })
  }

  getProductsJewels() {
    this.api.getJewels().subscribe(resp => {
      console.log(resp.body);
      this.products = [];
      resp.body.forEach((element:any) => {
        this.products.push({
          title: element.title,
          category: element.category,
          description: element.description,
          id: element.id,
          image: element.image,
          price: element.price,
        })
      })
    })
  }


  getProductsElectronics() {
    this.api.getElectronics().subscribe(resp => {
      console.log(resp.body);
      this.products = [];
      resp.body.forEach((element:any) => {
        this.products.push({
          title: element.title,
          category: element.category,
          description: element.description,
          id: element.id,
          image: element.image,
          price: element.price,
        })
      })
    })
  }

  getMensClothing() {
    this.api.getMenClothing().subscribe(resp => {
      console.log(resp.body);
      this.products = [];
      resp.body.forEach((element:any) => {
        this.products.push({
          title: element.title,
          category: element.category,
          description: element.description,
          id: element.id,
          image: element.image,
          price: element.price,
        })
      })
    })
  }

  getWomanClothing() {
    this.api.getWomanClothing().subscribe(resp => {
      console.log(resp.body);
      this.products = [];
      resp.body.forEach((element:any) => {
        this.products.push({
          title: element.title,
          category: element.category,
          description: element.description,
          id: element.id,
          image: element.image,
          price: element.price,
        })
      })
    })
  }

}
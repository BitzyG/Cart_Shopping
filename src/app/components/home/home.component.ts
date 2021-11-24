import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  infoUser: any = [];
  products: any = [];
  cartProducts: any;
  itemsCart = this.cartService.getItems();

  constructor(private api: ApiService,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.getProducts();
    // this.getProductsJewels()
    this.getUser();
  }

  getProducts() {
    this.api.getProducts().subscribe(resp => {
      // console.log(resp.body);
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
        // console.log(this.products);
      })
    })
  }

  getProductsJewels() {
    this.api.getJewels().subscribe(resp => {
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

  addToCart(product: any) {
    // agrega producto al carrito si está vacio
  if(this.itemsCart.length === 0) {
    this.cartService.addToCart(product);
  } else {
      // agrega el producto si el id es diferente a los agregados
    if(!this.itemsCart.find( (item: any) => item.id === product.id)) {
      this.cartService.addToCart(product);
      // si encuentra al id actualiza su cantidad
    } else {
      this.cartService.updateCart(product,'+');
    }
    }
    console.log(product);
  }

  getUser(){
    this.api.getUser().subscribe(resp => {
      console.log(resp.body);
      this.infoUser = [];
      resp.body.forEach((element:any) => {
        this.products.push({
          name: element.name,
          username: element.username,
          password: element.password,
        })
      })
    })
  }



}
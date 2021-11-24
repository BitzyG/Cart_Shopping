import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  itemCart: any[] = []; //para carrito
  itemLS: any;
  productStorage:any;
  parseStorage: any;

  constructor() { }

  /****************Funciones*************** */

  //agregar a carrito (sale de templates-products)
  addToCart(product: any) {
    product.cantidad = 1;
    product.total = product.precio;
    this.itemCart.push(product);
    localStorage.setItem('productStorage', JSON.stringify(this.itemCart));
  }

  // actualiza contenido del carrito
  updateCart(product: any, operator: string) {
    for (let j = 0; j < this.itemCart.length; j++) {
      if(this.itemCart[j].id === product.id) {
        switch(operator) {
          case '+':
            this.itemCart[j].cantidad++;
            this.itemCart[j].total =  this.itemCart[j].total + product.precio;
          break;
          case '-':
            this.itemCart[j].cantidad--;
            this.itemCart[j].total =  this.itemCart[j].total - product.precio;
          break;
        }
        break;
      }
    }
  }


  //Calcula el total de totales
  getTotal() {
    let total = 0;
    this.itemCart.forEach( item => {
        total = total + item.total;
    });
    return total;
  }

  //obtener items de carrito
  getItems() {
    return this.itemCart;
  }

  //limpiar el carrito
  clearCart() {
    // this.itemCart = [];
    localStorage.removeItem('productStorage')
    return this.itemCart;
  }

}

  // elimina contenido del carrito
  // deleteItem(productID: any) {
    // const index = this.itemCart.indexOf(productID);
    // if(index !== -1) {
    //   this.itemCart.splice(index,1);
    // this.productStorage = localStorage.getItem('productStorage');
    // this.parseStorage=  JSON.parse(this.productStorage);

    // const index = this.parseStorage.indexOf(productID.id);
    // if(index !== -1) {
    //   this.parseStorage.splice(index,1);

    // if (productID === this.parseStorage.id){
    //   // console.log(productID);
    //   console.log(this.parseStorage);
    // }

    // const index: number = this.parseStorage.indexOf(productID);
    // if (index !== -1) {
    //     this.parseStorage.splice(index, 1);
    // }
    // console.log(this.parseStorage.indexOf(productID.id));

    // if (productID.id != ''){
    //   return this.itemCart.filter((item: any) => item.id != productID.id);
    // }
    // console.log(this.itemCart.filter((item: any) => item.id !== productID.id));
    // console.log(index)
      // console.log(productID.id);
    // }
  // }
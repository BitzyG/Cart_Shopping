import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  itemCart = this.cartService.getItems(); //trae los productos del carrito
  cart: any= localStorage.getItem('productStorage');
  products: any = JSON.parse(this.cart);

  quantity:number=1;
  i: number =1;
  total:number=0;


  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    console.log(this.itemCart);
    console.log(this.products);
  }

  quantityTotal(i:number, item:any){
      if(item.cantidad + i === 0){
      console.log(this.products[0].cantidad);
      this.deleteItem(item);
      localStorage.setItem('productStorage', JSON.stringify(this.products));
    } else {
      this.products = this.products.map((product:any)=> product.id === item.id ? {...product, cantidad: product.cantidad + i} : product)
      console.log(this.products);
      localStorage.setItem('productStorage', JSON.stringify(this.products));
    }
    /* This.productos.map(product=> product.id === item.id ? {…product, cantidad: product.cantidad + i} : product)
 */
  }

  deleteItem(itemCart:any) {
    const index = this.products.indexOf(itemCart);
    if(index !== -1) {
      this.products.splice(index,1);
    console.log(this.products)
    } if (this.products == ''){
      this.products.cantidad = 0;
      this.cartService.clearCart();
    }
  }

}

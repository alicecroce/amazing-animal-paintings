import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from 'app/models/product';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.css'
})
export class CartViewComponent implements OnInit {

  cartItems:Product[]=[];
  totalPrice:number=0;

  constructor(private cartService:CartService){

  }
  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(data=>{
      this.cartItems=data;//setto i dati nella card
      this.totalPrice=this.getTotalPrice();//ed estrapolo la somma totale delle card
    })
  }

  getTotalPrice():number{
    let total=0;
    for( let item of this.cartItems){
      total+=item.price;
  }
  return total;
  }

  clearCart():void{
    this.cartService.clearCart().subscribe();
}

checkout():void{
this.cartService.checkout(this.cartItems).subscribe();//che prodotti dobbiamo acquistare? this.carItems(ogni elemento)
}

}

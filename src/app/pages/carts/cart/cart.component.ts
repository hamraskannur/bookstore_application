import { Component, Input, OnInit } from '@angular/core';
import { Books } from 'src/app/interface/interface';
import { CartServiceService } from 'src/app/services/cart.service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  @Input() cart!: Books;
  @Input() index!: number
  public quantity:number = 1;

  constructor(private cartServiceService:CartServiceService){}
  ngOnInit() {
    this.quantity = this.cart.quantity ?? 1;
  }
  decrement(id:string) {
    if (this.quantity !== 1) {
      this.quantity--;
      this.cartServiceService.changeCartQuantity(id,this.quantity,this.index)
    }
  }

  increment(id:string) {
    this.quantity++;
    this.cartServiceService.changeCartQuantity(id,this.quantity,this.index)
  }

  removeBook(id:string) {
    this.cartServiceService.removeFromCart(id)
  }
  updateQuantity(id:string) {
    if (this.quantity <= 0) {
      this.quantity = 1;
    }
    this.cartServiceService.changeCartQuantity(id,this.quantity,this.index)
  }
}



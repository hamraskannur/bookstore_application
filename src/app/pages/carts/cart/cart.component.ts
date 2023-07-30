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
  public count:number = 1;

  constructor(private cartServiceService:CartServiceService){}
  ngOnInit() {
    this.count = this.cart.quantity ?? 1;
  }
  decrement() {
    if (this.count !== 1) {
      this.count--;
    }
  }

  increment() {
    this.count++;
  }

  removeBook(id:string) {
    this.cartServiceService.removeFromCart(id)
  }
  updateQuantity() {
    if (this.count <= 0) {
      this.count = 1;
    }
  }
}



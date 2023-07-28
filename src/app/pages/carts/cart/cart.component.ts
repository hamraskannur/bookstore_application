import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  public count=1

  decrement(){
    if(this.count!==1){
      this.count--
    }
  }

  increment(){
    this.count++
  }

  removeBook(){
    console.log("removeBook");
  }
  updateQuantity(){
    if(this.count<=0){
     this.count=1
    }
  }
}

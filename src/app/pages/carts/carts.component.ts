import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/interface/interface';
import { CartServiceService } from 'src/app/services/cart.service.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {
cartItem:Books[]=[]
constructor(private cartServiceService:CartServiceService){}

ngOnInit() {
 this.cartItem= this.cartServiceService.getCartItems()
}


}

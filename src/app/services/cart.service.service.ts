import { Injectable } from '@angular/core';
import { Books } from '../interface/interface';
import { ToastrServiceService } from './toastr.service.service';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  constructor(private toastrServiceService:ToastrServiceService){}
  cartBooks:Books[]=[]

  addToCart(book: Books) {
    const existingBook = this.cartBooks.find(item => item.isbn13 === book.isbn13);
    if (existingBook) {
      if(existingBook.quantity){
        existingBook.quantity += 1;
      }
    } else {
      this.cartBooks.push({ ...book, quantity: 1 });
      console.log("kokoko");
      
      this.toastrServiceService.showSuccess(' Successfully added to cart.')
    }
  }

  removeFromCart(id: string) {
    const index = this.cartBooks.findIndex(book => book.isbn13 === id);
    if (index !== -1) {
      this.cartBooks.splice(index, 1);
      this.toastrServiceService.showSuccess(' Successfully removed .')
    }
  }

  getCartItems(){
    return this.cartBooks
  }
  
}

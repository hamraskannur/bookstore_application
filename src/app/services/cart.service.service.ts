import { Injectable } from '@angular/core';
import { Books } from '../interface/interface';
import { ToastrServiceService } from './toastr.service.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  
  cartBooks:Books[]=[]
  private cartItemCount = new Subject<number>();
  
  constructor(private toastrServiceService:ToastrServiceService){}

  addToCart(book: Books):void {
    const existingBook = this.cartBooks.find(item => item.isbn13 === book.isbn13);
    if (existingBook) {
      if(existingBook.quantity){
        existingBook.quantity += 1;
      }
      this.toastrServiceService.showError("The book already exists in the cart, and its quantity has been incremented.")
    } else {
      this.cartBooks.push({ ...book, quantity: 1 });      
      this.updateCartItemCount(); 
      this.toastrServiceService.showSuccess(' Successfully added to cart.')
    }

  }

  removeFromCart(id: string):void {
    const index = this.cartBooks.findIndex(book => book.isbn13 === id);
    if (index !== -1) {
      this.cartBooks.splice(index, 1);
      this.updateCartItemCount(); 
      this.toastrServiceService.showSuccess(' Successfully removed .')
    }
  }

  getCartItems():Books[]{
    return this.cartBooks
  }

  getCartItemCount(): Observable<number> {
    return this.cartItemCount.asObservable(); // Return Observable for cart count changes
  }


  private updateCartItemCount(): void {
     this.cartItemCount.next(this.cartBooks.length); 
  }
  
}

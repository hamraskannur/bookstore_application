import { Injectable } from '@angular/core';
import { Books } from '../interface/interface';
import { ToastrServiceService } from './toastr.service.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private cartBooks: Books[] = [];
  private cartItemCount = new Subject<number>();
  private readonly CART_STORAGE_KEY = 'cart_items';

  constructor(private toastrServiceService: ToastrServiceService) {
    this.loadCartFromLocalStorage();
  }

  private loadCartFromLocalStorage(): void {
    const cartItemsStr = localStorage.getItem(this.CART_STORAGE_KEY);
    if (cartItemsStr) {
      this.cartBooks = JSON.parse(cartItemsStr);
      this.updateCartItemCount();
    }
  }

  private saveCartToLocalStorage(): void {
    localStorage.setItem(this.CART_STORAGE_KEY, JSON.stringify(this.cartBooks));
  }

  private updateCartItemCount(): void {
    this.cartItemCount.next(this.cartBooks.length);
  }

  addToCart(book: Books): void {
    const existingBook = this.cartBooks.find(item => item.isbn13 === book.isbn13);
    if (existingBook) {
      if (existingBook.quantity) {
        existingBook.quantity += 1;
      }
      this.toastrServiceService.showError("The book already exists in the cart, and its quantity has been incremented.")
    } else {
      this.cartBooks.push({ ...book, quantity: 1 });
      this.updateCartItemCount();
      this.toastrServiceService.showSuccess(' Successfully added to cart.')
    }
    this.saveCartToLocalStorage();
  }

  removeFromCart(id: string): void {
    const index = this.cartBooks.findIndex(book => book.isbn13 === id);
    if (index !== -1) {
      this.cartBooks.splice(index, 1);
      this.updateCartItemCount();
      this.toastrServiceService.showSuccess(' Successfully removed .')
      this.saveCartToLocalStorage();
    }
  }

  getCartItems(): Books[] {
    return this.cartBooks;
  }

  getCartItemCount(): Observable<number> {
    return this.cartItemCount.asObservable();
  }

  isBookInCart(isbn: string): boolean {
    return this.cartBooks.some((book) => book.isbn13 === isbn);
  }

}

import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Books } from 'src/app/interface/interface';
import { ApiServiceService } from '../../../services/api.service.service';
import {  Router } from '@angular/router';
import { CartServiceService } from 'src/app/services/cart.service.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardsComponent implements OnInit {
  cardData: Books[] = [];
  constructor(private apiServiceService: ApiServiceService,private cartServiceService:CartServiceService,private router: Router ) {}

  ngOnInit() {
    this.apiServiceService.getBooks().pipe(
      map(({ books }: { total: string; books: Books[]; error: string }) =>
        books.map((book) => ({
          ...book,
          addedToCart: this.cartServiceService.isBookInCart(book.isbn13),
        }))
      )
    ).subscribe((transformedBooks: Books[]) => {      
      this.cardData = transformedBooks;
    });
  }

  addToCart(card: Books) {
    this.cartServiceService.addToCart(card)
    card.addedToCart = true;
  }

  openBookDetails(id: string) {
    this.router.navigate(["/bookDetails", id]);
  }
}

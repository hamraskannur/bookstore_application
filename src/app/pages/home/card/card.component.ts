import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Books } from 'src/app/interface/interface';
import { ApiServiceService } from '../../api.service.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardsComponent implements OnInit {
  cardData: Books[] = [];
  constructor(private apiServiceService: ApiServiceService,private router: Router ) {}

  ngOnInit() {
    this.apiServiceService.getBooks().subscribe(({books}:{ total: string, books:Books[], error: string }):void => {         
                
          this.cardData = books
      });
  }
  toggleLike(card: any) {
    card.liked = !card.liked;
  }

  openBookDetails(id: string) {
    this.router.navigate(["/bookDetails", id]);
  }
}

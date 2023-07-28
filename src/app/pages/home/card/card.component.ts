import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Books } from 'src/app/interface/interface';
import { ApiServiceService } from '../api.service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardsComponent implements OnInit {
  cardData: Books[] = [];
  constructor(private apiServiceService: ApiServiceService) {}

  ngOnInit() {
    this.apiServiceService.getBooks().subscribe(({books}:{ total: string, books:Books[], error: string }):void => {                
          this.cardData = books
      });
  }
  toggleLike(card: any) {
    card.liked = !card.liked;
  }

  toggleTrade(card: any) {
    card.traded = !card.traded;
  }
}

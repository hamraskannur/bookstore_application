import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiServiceService } from '../../api.service.service';
import { Books } from 'src/app/interface/interface';
import { ErrorHandlerServiceService } from '../../error-handler.service.service';

declare var bootstrap: any;

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  @ViewChild('carousel', { static: true })
  carouselRef!: ElementRef<HTMLDivElement>;
  private carousel: any;
  constructor(private apiServiceService: ApiServiceService,private errorHandlerServiceService:ErrorHandlerServiceService) {}

  currentPairIndex = 0;
  pairsOfImages: string[][] = [];

  ngOnInit() {
    this.createPairsOfImages();
    this.carousel = new bootstrap.Carousel(this.carouselRef.nativeElement, {
      interval: 3000,
    });
    this.startCarousel();
  }

  createPairsOfImages() {
     this.apiServiceService.getBooks().subscribe(({books}:{ total: string, books:Books[], error: string })=>{
      for (let i = 0; i < books.length; i += 2) {
        const pair: string[] = [];
        if (books[i]) pair.push(books[i].image);
        if (books[i + 1]) pair.push(books[i + 1].image);
        if (books[i + 2]) pair.push(books[i + 2].image);
        this.pairsOfImages.push(pair);
      }
    },(error)=>{
      this.errorHandlerServiceService.handleError(error);
    })
  }

  startCarousel() {
    setInterval(() => {
      this.currentPairIndex =
        (this.currentPairIndex + 1) % this.pairsOfImages.length;
      this.carousel.to(this.currentPairIndex);
    }, 4000);
  }

  prevSlide() {
    this.currentPairIndex =
      (this.currentPairIndex - 1 + this.pairsOfImages.length) %
      this.pairsOfImages.length;
    this.carousel.to(this.currentPairIndex);
  }

  nextSlide() {
    this.currentPairIndex =
      (this.currentPairIndex + 1) % this.pairsOfImages.length;
    this.carousel.to(this.currentPairIndex);
  }
}

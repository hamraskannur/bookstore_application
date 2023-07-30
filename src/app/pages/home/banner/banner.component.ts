import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiServiceService } from '../../../services/api.service.service';
import { Books } from 'src/app/interface/interface';
import { ErrorHandlerServiceService } from '../../../services/error-handler.service.service';

declare var bootstrap: any;
type ImagePair = { image: string; id: string };

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  @ViewChild('carousel', { static: true })
  carouselRef!: ElementRef<HTMLDivElement>;
  private carousel: any;
  constructor(private apiServiceService: ApiServiceService, private errorHandlerServiceService: ErrorHandlerServiceService) { }

  currentPairIndex = 0;
  public pairsOfImages: ImagePair[][] = [];

  ngOnInit() {
    this.createPairsOfImages();
    this.carousel = new bootstrap.Carousel(this.carouselRef.nativeElement, {
      interval: 3000,
    });
    this.startCarousel();
  }

  createPairsOfImages() {
    this.apiServiceService.getBooks().subscribe(({ books }: { total: string, books: Books[], error: string }) => {
      for (let i = 0; i < books.length; i += 2) {
        const pair: ImagePair[] = [];
        if (books[i]) pair.push({ image: books[i].image, id: books[i].isbn13 });
        if (books[i + 1]) pair.push({ image: books[i + 1].image, id: books[i + 1].isbn13 });
        if (books[i + 2]) pair.push({ image: books[i + 2].image, id: books[i + 2].isbn13 });
        this.pairsOfImages.push(pair);
      }
      console.log(this.pairsOfImages);
    });
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

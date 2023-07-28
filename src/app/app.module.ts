import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './pages/home/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { BannerComponent } from './pages/home/banner/banner.component';
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from './pages/home/card/card.component';
import { shortenPipe } from './pipes/shorten';
import { FooterComponent } from './pages/home/footer/footer.component';
import { changeCurrency } from './pipes/change_currency';
import { CartsComponent } from './pages/carts/carts.component';
import { CartComponent } from './pages/carts/cart/cart.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';

@NgModule({
  declarations: [
    AppComponent,
    shortenPipe,
    changeCurrency,
    NavBarComponent,
    HomeComponent,
    BannerComponent,
    CardsComponent,
    FooterComponent,
    CartsComponent,
    CartComponent,
    BookDetailsComponent,
  ],
  imports: [
    HttpClientModule  ,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr'; 

import { ErrorHandlingInterceptor } from './core/Interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './pages/home/nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { BannerComponent } from './pages/home/banner/banner.component';
import { CardsComponent } from './pages/home/card/card.component';
import { shortenPipe } from './pipes/shorten';
import { FooterComponent } from './pages/home/footer/footer.component';
import { changeCurrency } from './pipes/change_currency';
import { CartsComponent } from './pages/carts/carts.component';
import { CartComponent } from './pages/carts/cart/cart.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';
import { ErrorsComponent } from './pages/errors/errors.component';
import { EmptyCartComponent } from './pages/carts/empty-cart/empty-cart.component';

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
    ErrorsComponent,
    EmptyCartComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ErrorHandlingInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

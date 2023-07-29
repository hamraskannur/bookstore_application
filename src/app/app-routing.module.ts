import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartsComponent } from './pages/carts/carts.component';
import { CardsComponent } from './pages/home/card/card.component';
import { BookDetailsComponent } from './pages/book-details/book-details.component';
import { ErrorsComponent } from './pages/errors/errors.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component:HomeComponent   },
  { path: 'books', component:CardsComponent   },
  { path: 'cart', component:CartsComponent   },
  { path: 'bookDetails/:id', component:BookDetailsComponent},
  { path: '404', component:ErrorsComponent},
  { path: '*', redirectTo: '/404', pathMatch: 'full' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

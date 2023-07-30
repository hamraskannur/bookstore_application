import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from 'src/app/services/cart.service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  headerActive = false;
  searchActive=false
  cartItemCount=0
  constructor(public router: Router,private cartServiceService:CartServiceService){}


  ngOnInit() {
    this.onWindowScroll(); 
    this.cartServiceService.getCartItemCount().subscribe((count) => {
      this.cartItemCount = count; 
    });
  }

  showSearch(){
    this.searchActive=!this.searchActive;
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.headerActive = window.scrollY > 80;
  }

  
}

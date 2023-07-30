import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  headerActive = false;
  searchActive=false
  constructor(public router: Router) {}

  ngOnInit() {
    this.onWindowScroll(); 
  }

  showSearch(){
    this.searchActive=!this.searchActive;
  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.headerActive = window.scrollY > 80;
  }

  
}

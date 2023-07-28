import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  headerActive = false;
  searchActive=false

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

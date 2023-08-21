import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookstore_application';
  count=0

  addCount=()=>{
        this.count++
  }

  mCount=()=>{
    this.count--
  }
}

import { Component,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../../services/api.service.service';
import { ErrorHandlerServiceService } from '../../services/error-handler.service.service';
import { CartServiceService } from 'src/app/services/cart.service.service';
import { Books } from 'src/app/interface/interface';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  public id :string=''
  public bookDetails:any={}
constructor(private route: ActivatedRoute,private apiServiceService:ApiServiceService,private errorHandlerServiceService:ErrorHandlerServiceService,private cartServiceService:CartServiceService){}

ngOnInit(){
  this.route.params.subscribe(params => {
    this.id = params['id']; 
    this.apiServiceService.getBooksDetails(this.id).subscribe((data:any)=>{
      console.log(data);
      
       this.bookDetails=data; 
    })
  });
}

addToCart(card: Books) {
  this.cartServiceService.addToCart(card)
}

}

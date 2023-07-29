import { Component,OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from '../api.service.service';
import { ErrorHandlerServiceService } from '../error-handler.service.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  public id :string=''
  public bookDetails:any={}
constructor(private route: ActivatedRoute,private apiServiceService:ApiServiceService,private errorHandlerServiceService:ErrorHandlerServiceService){}

ngOnInit(){
  this.route.params.subscribe(params => {
    this.id = params['id']; 
    this.apiServiceService.getBooksDetails(this.id).subscribe((data:any)=>{
       this.bookDetails=data; 
    },(error:object)=>{
      this.errorHandlerServiceService.handleError(error);
      
    })
  });
}
}

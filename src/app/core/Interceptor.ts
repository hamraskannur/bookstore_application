import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlerServiceService } from '../services/error-handler.service.service';

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {
  constructor(private errorHandlerServiceService:ErrorHandlerServiceService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.errorHandlerServiceService.handleError(error) 
        }else{
            this.errorHandlerServiceService.handleError(error) 
        }

        return throwError(error);
      })
    );
  }
}

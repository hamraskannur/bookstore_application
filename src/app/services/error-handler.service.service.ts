import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerServiceService {
  constructor(private router: Router) { }

  handleError(error: any): void {
    this.router.navigate(["/404"]);
  }
}

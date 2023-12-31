import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Books } from 'src/app/interface/interface';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  private Api="https://api.itbook.store/"
  constructor(private http: HttpClient) {}
  
  getBooks=(): Observable<{ total: string, books:Books[], error: string }> => {
    const url = `${this.Api}1.0/new`;
    return this.http.get<{ total: string, books:Books[], error: string }>(url)
  }

  getBooksDetails=(id:string):any => {
    const url = `${this.Api}1.0/books/${id}`;
    return this.http.get(url)
  }
}

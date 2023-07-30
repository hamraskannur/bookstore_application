import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Books } from 'src/app/interface/interface';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
   public Api="https://api.itbook.store/"
  constructor(private http: HttpClient) {}
  
  getBooks=() => {
    const url = `${this.Api}1.0/search/mongodb`;
    return this.http.get<{ total: string, books:Books[], error: string }>(url)
  }

  getBooksDetails=(id:string):any => {
    const url = `${this.Api}1.0/books/${id}`;
    return this.http.get(url)
  }
}

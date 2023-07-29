import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Books } from 'src/app/interface/interface';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {

  constructor(private http: HttpClient) {}
  
  getBooks=() => {
    const url = 'https://api.itbook.store/1.0/search/mongodb';
    return this.http.get<{ total: string, books:Books[], error: string }>(url)
  }

  getBooksDetails=(id:string):any => {
    const url = `https://api.itbook.store/1.0/books/${id}`;
    return this.http.get(url)
  }
}

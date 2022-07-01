import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Category } from '../Entities/category';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private url = 'https://api.publicapis.org/categories'; // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category> {
    return this.http
      .get<Category>(this.url)
      .pipe(tap((_) => console.log('fetched Category')));
  }
}

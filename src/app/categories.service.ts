import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  getCategory(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/categories?id=${id}`);
  }

  getCategories(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/categories');
  }

}

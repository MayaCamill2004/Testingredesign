

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }

  submitReview(productId: number, review: any): Observable<any> {

    const url = `https://your-api.com/products/${productId}/reviews`;
    return this.http.post(url, review);
  }
}

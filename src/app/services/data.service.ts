import { Product } from './../models/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  public url = 'http://127.0.0.1:3000/';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>(`${this.url}v1/products`);
  }

  authenticate(data: any) {
    return this.http.post<Product[]>(`${this.url}v1/accounts/authenticate`, data);
  }

}

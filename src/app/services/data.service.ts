import { Product } from './../models/product.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>(`localhost:3000/v1/products`);
  }

}

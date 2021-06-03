import { Product } from './../models/product.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  public url = 'http://127.0.0.1:3000/';

  constructor(private http: HttpClient) {}

  public composeHeaders() {
    const token = localStorage.getItem('petshop.token');
    const headers = new HttpHeaders().set('Authorization', `bearer ${token}`);
    return headers;
  }

  getProducts() {
    return this.http.get<Product[]>(`${this.url}v1/products`);
  }

  authenticate(data: any) {
    return this.http.post<Product[]>(`${this.url}v1/accounts/authenticate`, data);
  }

  create(data: any) {
    return this.http.post(`${this.url}v1/accounts`, data);
  }

  refreshToken() {
    return this
            .http
            .post<Product[]>(
              `${this.url}v1/accounts/refresh-token`,
              null,
              { headers: this.composeHeaders() }
            );
  }
}

import { Product } from './../../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html'
})
export class ProductsPageComponent implements OnInit {
  products$: any;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.products$ = this.data.getProducts();
  }

}

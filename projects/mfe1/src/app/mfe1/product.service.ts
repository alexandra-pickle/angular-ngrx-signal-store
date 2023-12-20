import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from './product.modal';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private readonly httpClient: HttpClient) {}

  allProducts$: Observable<Product[]> = this.httpClient
    .get<Product[]>('https://fakestoreapi.com/products')
    .pipe(map((res) => res));
}

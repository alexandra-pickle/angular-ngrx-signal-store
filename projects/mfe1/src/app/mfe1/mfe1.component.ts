import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { EMPTY, Observable, catchError, of } from 'rxjs';
import { Product } from './product.modal';

@Component({
  selector: 'app-mfe1',
  templateUrl: './mfe1.component.html',
})
export class Mfe1Component {
  products$: Observable<Product[]> = this.productService.allProducts$.pipe(
    catchError((err) => EMPTY)
  );

  constructor(private readonly productService: ProductService) {}
}

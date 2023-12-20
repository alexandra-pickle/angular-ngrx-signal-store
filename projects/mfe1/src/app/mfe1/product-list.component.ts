import { Component, OnInit, inject } from '@angular/core';
import { ProductStore } from '../state/product.store';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  readonly store = inject(ProductStore);

  ngOnInit(): void {
    this.store.load();
  }
}

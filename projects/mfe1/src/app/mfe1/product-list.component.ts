import { Component, OnInit, inject } from '@angular/core';
import { ProductStore } from '../state/product.store';
import { ShellStore } from 'projects/shell/src/app/shell.store';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  readonly store = inject(ProductStore);
  readonly shellStore = inject(ShellStore);

  ngOnInit(): void {
    this.shellStore.updatePageTitle('Page title: Mfe 1');
    this.store.load();
  }
}

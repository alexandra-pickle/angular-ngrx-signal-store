import { NgModule } from '@angular/core';
import { Mfe1RoutingModule } from './mfe1-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProductStore } from '../state/product.store';
import { ProductService } from './product.service';
import { ProductListComponent } from './product-list.component';
import { ProductCreateComponent } from './product-create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    Mfe1RoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [ProductListComponent, ProductCreateComponent],
  providers: [ProductService, ProductStore],
})
export class Mfe1Module {}

import { NgModule } from '@angular/core';
import { Mfe1Component } from './mfe1.component';
import { Mfe1RoutingModule } from './mfe1-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './state/product.reducer';

@NgModule({
  imports: [CommonModule, Mfe1RoutingModule, HttpClientModule],
  declarations: [Mfe1Component],
  providers: [ProductService],
})
export class Mfe1Module {}

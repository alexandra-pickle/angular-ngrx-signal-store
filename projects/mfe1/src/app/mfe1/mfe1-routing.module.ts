import { RouterModule, Routes } from '@angular/router';
import { Mfe1Component } from './mfe1.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: Mfe1Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mfe1RoutingModule {}

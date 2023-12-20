import { RouterModule, Routes } from '@angular/router';
import { ToDoListComponent } from './todo-list.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ToDoListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mfe2RoutingModule {}

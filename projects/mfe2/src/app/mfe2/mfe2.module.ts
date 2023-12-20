import { NgModule } from '@angular/core';
import { ToDoListComponent } from './todo-list.component';
import { Mfe2RoutingModule } from './mfe2-routing.module';
import { ToDoService } from './todo.service';
import { ToDoStore } from '../state/todo.store';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule, Mfe2RoutingModule],
  declarations: [ToDoListComponent],
  providers: [ToDoService, ToDoStore],
})
export class Mfe2Module {}

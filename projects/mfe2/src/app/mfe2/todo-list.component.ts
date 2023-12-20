import { Component, inject } from '@angular/core';
import { ToDoStore } from '../state/todo.store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class ToDoListComponent {
  readonly store = inject(ToDoStore);

  ngOnInit(): void {
    this.store.load();
  }
}

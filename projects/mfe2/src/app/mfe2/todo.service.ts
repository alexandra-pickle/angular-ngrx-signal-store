import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ToDo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class ToDoService {
  constructor(private readonly httpClient: HttpClient) {}

  getToDos(): Observable<ToDo[]> {
    return this.httpClient.get<ToDo[]>(
      'https://jsonplaceholder.typicode.com/todos'
    );
  }
}

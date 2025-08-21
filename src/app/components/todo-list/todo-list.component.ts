import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  onAddTodo(description: string): void {
    this.todoService.addTodo({ description }).subscribe(() => {
      this.loadTodos();
    });
  }

  onDeleteTodo(id: number): void {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.loadTodos();
    });
  }

  onCompleteTodo(todo: Todo): void {
    this.todoService.updateTodo(todo.id, true).subscribe(() => {
      this.loadTodos();
    });
  }
}
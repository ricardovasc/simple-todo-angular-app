import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: Todo | undefined;
  @Output() deleteTodo = new EventEmitter<number>();
  @Output() completeTodo = new EventEmitter<Todo>();

  onDelete() {
    if (this.todo) {
      this.deleteTodo.emit(this.todo.id);
    }
  }

  onComplete() {
    if (this.todo) {
      this.completeTodo.emit(this.todo);
    }
  }
}
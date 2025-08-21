import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  @Output() addTodo = new EventEmitter<string>();
  newTodoDescription = '';

  onAddTodo() {
    if (this.newTodoDescription.trim()) {
      this.addTodo.emit(this.newTodoDescription);
      this.newTodoDescription = '';
    }
  }
}
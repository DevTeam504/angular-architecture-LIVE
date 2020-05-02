import { Component, OnInit } from '@angular/core';
import { TodoStore } from '../todo.store';

@Component({
  selector: 'app-todo-add',
  template: `
    <p>
      <input type="text" [(ngModel)]="description" />
      <button (click)="onSave()">Guardar</button>
    </p>
  `,
  styles: [
  ]
})
export class TodoAddComponent implements OnInit {

  description: string;

  constructor(private store: TodoStore) { }

  ngOnInit(): void {
  }

  onSave() {
    this.store.save({ description: this.description, done: false });
    this.description = '';
  }

}

import { Component, OnInit } from '@angular/core';
import { TodoStore } from '../todo.store';

@Component({
  selector: 'app-todo-add',
  template: `
    <p>
      <input type="text" [(ngModel)]="task" />
      <button (click)="onSave()">Guardar</button>
    </p>
  `,
  styles: [
  ]
})
export class TodoAddComponent implements OnInit {

  task: string;

  constructor(private store: TodoStore) { }

  ngOnInit(): void {
  }

  onSave() {
    this.store.save({ description: this.task });
    this.task = '';
  }

}

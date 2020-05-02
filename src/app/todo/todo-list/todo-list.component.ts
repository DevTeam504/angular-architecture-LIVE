import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { Subject } from 'rxjs';
import { Task } from '../task';
import { TodoStore } from '../todo.store';

@Component({
  selector: 'app-todo-list',
  template: `
    <ol>
      <div *ngIf="tasks$ | async as tasks">
        <span *ngIf="tasks.length===0">No hay tareas</span>
        <li *ngFor="let task of tasks" (click)="onDone(task)">
          <span [ngClass]="{ 'done': task.done }">{{ task.description }}</span>
        </li>
      </div>
    </ol>
  `,
  styles: [
  ]
})
export class TodoListComponent implements OnInit {

  tasks$ = this.store.state$;
  constructor(private store: TodoStore) { }

  ngOnInit(): void {
  }

  onDone(task: Task) {
    this.store.markDone(task);
  }

}

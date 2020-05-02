import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TodoStore {

  private stateBS = new BehaviorSubject<Task[]>([]);
  state$ = this.stateBS.asObservable();

  constructor() { }

  save(task: Task) {
    this.stateBS.next([...this.stateBS.value, task]);
  }

  markDone(task: Task) {
    this.stateBS.next([...this.stateBS.value.filter(x => x.description !== task.description),
      {...task, done: !task.done }]);
  }
}

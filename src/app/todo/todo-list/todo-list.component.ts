import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  template: `
    <p>
      todo-list works!
    </p>
  `,
  styles: [
  ]
})
export class TodoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

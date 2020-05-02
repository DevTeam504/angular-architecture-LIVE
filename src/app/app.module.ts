import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoAddComponent } from './todo/todo-add/todo-add.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    TodoAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

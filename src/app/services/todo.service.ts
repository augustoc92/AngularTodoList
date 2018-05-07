import { Injectable } from '@angular/core';
import { Todo } from '../classes/todo';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos : Todo[];
  private nextId : number;


  constructor() { 
    this.todos = [
      new Todo(0 , 'Make Dinner Tonight'),
      new Todo(1 , 'Fold the laundry'),
      new Todo(2 , 'Sleep 8 hours')
    ];
    this.nextId = 3;
  }

  public addTodo(text: string): void{
   let todo = new Todo(this.nextId ,text);
   this.todos.push(todo);
   this.nextId++
   console.log(this.todos);
  }

  public getTodos() : Todo[] {
    return this.todos;
  }

  public removeTodo(id: number) : void { 
    this.todos = this.todos.filter((todo)) => todo.id !== id;
  }
}

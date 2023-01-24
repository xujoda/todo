import { Component, Input, NgModule, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { TaskClass } from 'types/types';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {
  
  tasks: TaskClass[] = [];
  taskName: string = '';
  taskDescription: string = '';

  constructor() {
    this.tasks = [];
   }

  ngOnInit(): void {
  }

  addTask(){
    this.tasks.push({
      name: this.taskName,
      description: this.taskDescription,
      completed: false
    });
    this.taskName = '';
    this.taskDescription = '';
  }

  deleteTask(taskName: string){
   const taskIndex = this.tasks.findIndex(x => x.name === taskName);
    this.tasks.splice(taskIndex,1);
  }
  
  toggleStatus(taskName: string) {
    const task = this.tasks.find(x => x.name === taskName);
    if (task)
      task.completed = !task.completed;
  }

}

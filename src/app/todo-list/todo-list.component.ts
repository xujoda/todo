import { Component, Input, NgModule, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Task } from '../../service/task.interface';
import {TasksService} from '../../service/tasks.service'
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [TasksService]
})

export class TodoListComponent implements OnInit {

  constructor(private tasksService: TasksService) {
   }
  

  getTasksSubscription?: Subscription;
  tasks: Task[] = [];
  taskName: string = '';
  taskDescription: string = '';

  
  ngOnInit() {
    this.getTasksSubscription = this.tasksService.getTasksFromServer().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  addTask() {
    const task: Task = {
      name: this.taskName,
      description: this.taskDescription,
      completed: false,
      id: null
    };
    this.tasksService.addTaskToServer(task).subscribe(newTask => {
      this.tasks.push(newTask);
    });
    console.log(task);
    this.taskName = '';
    this.taskDescription = '';
  }

  deleteTask(taskName: string) {
    console.log(taskName);
    const task = this.tasks.find(x => x.name === taskName);
    if (task){
      this.tasksService.deleteTaskFromServer(task).subscribe();
      this.tasks.splice(this.tasks.indexOf(task), 1);
    }
  }
  
  toggleStatus(taskName: any) {
    const task = this.tasks.find(x => x.name === taskName);
    if (task)
      task.completed = !task.completed;
  }

  ngOnDestroy() {
    this.getTasksSubscription?.unsubscribe();
  }

}

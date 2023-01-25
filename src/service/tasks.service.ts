import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from "./task.interface"
@Injectable({
  providedIn: 'root'
})

export class TasksService {
  constructor(private http: HttpClient) {}

  getTasksFromServer() {
    return this.http.get<Task[]>('http://localhost:3000/tasks');
  }

  addTaskToServer(task: Task){
    return this.http.post<Task>('http://localhost:3000/tasks', task);
  }

  deleteTaskFromServer(task: Task) {
    return this.http.delete<Task>(`http://localhost:3000/tasks/${task.id}`);
  }
}
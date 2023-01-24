import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListComponent } from './todo-list.component';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a function to add tasks', () =>{
    expect(component.addTask).toBeTruthy();
  })

  it('should have a function to delete tasks', () =>{
    expect(component.deleteTask).toBeTruthy();
  })

  it('should have a function to toggle the status of a task', () => {
  expect(component.toggleStatus).toBeTruthy();
  });

  it('should add a new task to the task list', () => {
    component.taskName = 'Test @@@Task';
    component.taskDescription = 'Test @@@Description';
    component.addTask();
    expect(component.tasks.length).toBe(1);
    expect(component.tasks[0].name).toBe('Test @@@Task');
    expect(component.tasks[0].description).toBe('Test @@@Description');
    });

    it('should toggle the status of a task', () => {
      component.taskName = 'Test Task';
      component.addTask();
      expect(component.tasks[0].completed).toBeFalsy();
      component.toggleStatus(component.tasks[0]);
      expect(component.tasks[0].completed).toBeTruthy();
      });
      });
      
      
import { TaskService } from './../shared/task.service';
import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../shared/task';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.page.html',
  styleUrls: ['./task-list-item.page.scss'],
})
export class TaskListItemPage implements OnInit {
  @Input()
  task: Task;


  constructor(private taskService: TaskService) { }

  ngOnInit() {
  
  }

  delete(task: Task){
    this.taskService.delete(task.id);
  }

  onCompletedCheckChange(task: Task){
    this.taskService.save(task);
  }

  
}

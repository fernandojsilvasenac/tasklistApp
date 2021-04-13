import { TaskService } from './../shared/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/task';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.page.html',
  styleUrls: ['./task-form.page.scss'],
})
export class TaskFormPage implements OnInit {
  // 1  
  // task: Task = new Task();
  task: Task;

  title: string = 'Nova Tarefa';
  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ) { }

  ngOnInit() {
    // 2
    this.task = new Task();

    const id = this.activateRoute.snapshot.paramMap.get('id');
    if (id){
      this.task = this.taskService.getById(parseInt(id));
      this.title = 'Alterando tarefa';
    }
  }

  onSubmit(){
    this.taskService.save(this.task);
    this.router.navigate(['']);
  }

}

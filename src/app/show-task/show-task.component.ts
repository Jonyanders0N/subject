import { Component, OnInit, inject } from '@angular/core';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.scss']
})
export class ShowTaskComponent implements OnInit{
  tasks: string[] = ['task1', 'task2', 'task3'];

  taskService = inject(TaskService);

  ngOnInit(){
    this.taskService.newTask.subscribe((task) => {
      this.tasks.push(task);
    })
  }
}

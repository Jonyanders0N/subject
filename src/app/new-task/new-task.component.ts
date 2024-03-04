import { Component, EventEmitter, inject } from '@angular/core';
import { TaskService } from '../shared/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent {
  createTask: EventEmitter<string> = new EventEmitter<string>();

  inputTask: string = '';
  taskService = inject(TaskService);

  onCreateTask(){
    console.log(this.inputTask);
    this.taskService.onCreateTask(this.inputTask);
  }
}

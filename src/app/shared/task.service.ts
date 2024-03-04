import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class TaskService {
    // newTask: EventEmitter<string> = new EventEmitter<string>();
    newTask: Subject<string> = new Subject<string>();

    onCreateTask(task: string){
        // this.newTask.emit(task);
        this.newTask.next(task);
    }
}
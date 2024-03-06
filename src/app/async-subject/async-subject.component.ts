import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit{
  ngOnInit() {
    const objAsyncSubject = new AsyncSubject();

    
    objAsyncSubject.next(100);
    objAsyncSubject.next(200);
    objAsyncSubject.next(300);
    
    objAsyncSubject.subscribe((data) => console.log("Subscribe 1:", data));

    objAsyncSubject.complete();
    objAsyncSubject.next(400);
    objAsyncSubject.complete();

    objAsyncSubject.subscribe((data) => console.log("Subscribe 2:", data));
  }
}

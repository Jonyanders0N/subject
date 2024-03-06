import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit{
  ngOnInit() {
    const obsSubject = new ReplaySubject(2); // When you add a buffer size you will recieve only the last to emit data.

    obsSubject.next(2019);
    obsSubject.next(2018);
    obsSubject.next(2017);

    // Subscribe 1
    obsSubject.subscribe((data) => console.log("obsSubject",data));
  
    // Subscribe 2
    obsSubject.subscribe((data) => console.log("obsSubject",data));
  
    // obsSubject.next(Math.random());
    obsSubject.next(2024);
  
    // Subscribe 3
    obsSubject.subscribe((data) => console.log("obsSubject",data));
  
    obsSubject.next(2023);
  }
}

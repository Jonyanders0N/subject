import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  templateUrl: './behavior-subject.component.html',
  styleUrls: ['./behavior-subject.component.scss']
})
export class BehaviorSubjectComponent implements OnInit{
  ngOnInit() {
    let obsSubject = new BehaviorSubject(2020);

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

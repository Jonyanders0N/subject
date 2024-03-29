import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit{
  ngOnInit(){
    let obsObserver = new Observable((observer) => { observer.next(Math.random()) }) // Observable
    let obsSubject = new Subject(); // Subject

    // Subscribe 1
    obsObserver.subscribe((data) => console.log("obsObserver",data));
    obsSubject.subscribe((data) => console.log("obsSubject",data));

    // Subscribe 2
    obsObserver.subscribe((data) => console.log("obsObserver",data));
    obsSubject.subscribe((data) => console.log("obsSubject",data));

    obsSubject.next(Math.random());
    obsSubject.next("Teste");

    //ajax
    const subject = new Subject();
    const data = ajax("https://randomuser.me/api");

    // Observable
    data.subscribe((res) => console.log(res)); // one call
    data.subscribe((res) => console.log(res)); // second call
    data.subscribe((res) => console.log(res)); // third call

    // Subject
    subject.subscribe((res) => console.log(res));
    subject.subscribe((res) => console.log(res));
    subject.subscribe((res) => console.log(res));

    data.subscribe(subject); // Just one call
  }
}

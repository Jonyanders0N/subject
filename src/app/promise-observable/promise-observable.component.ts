import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-promise-observable',
  templateUrl: './promise-observable.component.html',
  styleUrls: ['./promise-observable.component.scss']
})
export class PromiseObservableComponent implements OnInit{
  ngOnInit(){
    // The promise return the data as soon as created
    const promise = new Promise((resolve, reject) => {
      console.log('Promise is called');
      resolve(100);
      resolve(100);// Doesn't work because promise can emir only one value at the time 
      resolve(100);// Doesn't work because promise can emir only one value at the time 
    })

    promise.then((data) => console.log(data));

    // The observable return the data after you subscribe
    const observable = new Observable((data) => {
      console.log('Observable is called');
      data.next(200);
      data.next(200);
      data.next(200);
    });
    observable.subscribe((data) => console.log(data));
  }
}

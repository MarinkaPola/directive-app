import {Component, OnInit} from '@angular/core';
import {Observable, Subscriber} from 'rxjs';


@Component({
  selector: 'app-built',
  templateUrl: './built.component.html',
  styleUrls: ['./built.component.css']
})
export class BuiltComponent implements OnInit {
  counter: number = 0;
  time!: Observable<number>;

  start() {
    this.time = new Observable<number>((observer: Subscriber<number>) => {
      setInterval(() => {
        observer.next(this.counter++);
      }, 1000);
    });
  }

  constructor() {
  }

  ngOnInit(): void {

  }

}

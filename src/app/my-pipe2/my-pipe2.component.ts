import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-pipe2',
  templateUrl: './my-pipe2.component.html',
  styleUrls: ['./my-pipe2.component.css']
})
export class MyPipe2Component implements OnInit {
  value!: number;

  constructor() { }

  ngOnInit(): void {
  }

}

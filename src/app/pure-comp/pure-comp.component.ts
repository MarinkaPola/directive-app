import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pure-comp',
  templateUrl: './pure-comp.component.html',
  styleUrls: ['./pure-comp.component.css']
})
export class PureCompComponent implements OnInit {
  person1 = {firstName: 'Ivan', lastName: 'Gulov'};
  person2 = {firstName: 'Ivan', lastName: 'Gulov'};

  changePropPerson1(){
    this.person1.lastName = '...';
  }

  changeRefPerson1(){
    this.person1 = { firstName: '...', lastName: '...'};
  }

  changePropPerson2(){
    this.person2.lastName = '...';
  }

  changeRefPerson2(){
    this.person2 = { firstName: '...', lastName: '...'};
  }
  constructor() { }

  ngOnInit(): void {
  }

}

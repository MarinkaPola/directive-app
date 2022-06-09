22;import {Component, OnInit, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-myif',
  templateUrl: './myif.component.html',
  styleUrls: ['./myif.component.css']
})
export class MyifComponent implements OnInit {
  visible = false;
  changeVisibility(){
    this.visible = !this.visible;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

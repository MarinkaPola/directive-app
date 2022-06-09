import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-host-binding',
  templateUrl: './host-binding.component.html',
  styles: ['.pressed { background-color: red; color: white}']
})
export class HostBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[myCoords]'
})
export class CoordsDirective {

  constructor(private  ef: ElementRef) { }
  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent){
    //установка обработчика на событие mousemove и передача в качестве параметра объекта $event
    const message = 'X' + event.offsetX + 'Y' + event.offsetY;
    this.ef.nativeElement.innerHTML = message;
  }
}

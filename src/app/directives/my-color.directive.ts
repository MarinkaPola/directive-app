import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[myColor]'
})
export class MyColorDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(elementRef.nativeElement, 'color', 'red');
  }

}

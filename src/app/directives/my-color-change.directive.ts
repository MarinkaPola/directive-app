import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[myColorChange]'
})
export class MyColorChangeDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @Input('myColorChange') set changeColor(colorW: string) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', colorW);
  }
}

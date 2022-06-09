import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[clickableElement]'
})
export class ClickableDirective {

  constructor(private ef: ElementRef, private renderer: Renderer2) {
   // ef.nativeElement.style.cursor = 'pointer';  - через сам элемент не правильно менять свойства элемента, нужно менять свойства через ссылку на элемент!
    this.renderer.setStyle(this.ef.nativeElement, 'cursor', 'pointer');
  }

   //@HostBinding -позволяет выполнить привязку свойства к элементу
  //Если свойство  isClicked = true  для хост элемента будет добавлен класс pressed
  @HostBinding('class.pressed') isClicked: boolean = false;

  @HostListener('mousedown') onMouseDown() {
    this.isClicked = true;
  }

  @HostListener('mouseup') onMouseUp() {
    this.isClicked = false;
  }
}

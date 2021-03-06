import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[myEvent]'
})
export class EventDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  // HostListener - ссылается на ДОМ элемент, который содержит директиву. В данном случае это <div>
  // Устанавливаем обработчик на событие mouseenter
    @HostListener('mouseenter') onMouseEnter(){
      this.changeColor('red');
    }
  @HostListener('mouseleave') onMouseLeave() {
      this.changeColor('');
    }
    private changeColor(color: string){
      this.renderer.setStyle(this.elementRef.nativeElement, 'color', color);
    }

}

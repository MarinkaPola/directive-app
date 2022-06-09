import {Directive, ElementRef, Renderer2, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[myRepeat], myRepeat'  // директиву можно использовать как атрибут и как элемент
})
export class MyRepeatDirective implements OnInit{
  @Input() message!: string;
  @Input() count!: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

    }
    ngOnInit() {
      if (this.count && this.message) {
        console.log(+this.count);
        for (let i = 0; i < +this.count; i++) {
          // создание элемента div в элементе для которого установлена директива
          const elem: HTMLDivElement = this.renderer.createElement('div');
          this.renderer.appendChild(this.elementRef.nativeElement, elem);
          // установка текста для нового элемента
          elem.innerHTML = this.message;
        }
      }

    }

}

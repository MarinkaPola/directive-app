import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[myDelay]'
})
export class DelayDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  @Input('myDelay') set delayTime(time: number) {
    setTimeout(() => {
      this.viewContainer.createEmbeddedView(this.templateRef); //создание представления на основе шаблона
    }, time);
  }
}

import {Directive, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[uCard]'
})
export class ContextDirective implements OnInit{

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  ngOnInit(){
  const context: UserCardContext = new UserCardContext('Ivan', 'Gulai');
  this.viewContainer.createEmbeddedView(this.templateRef, context);
  }
}
  class UserCardContext {
    public firstName: string;
    public lastName: string;

    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
}
}


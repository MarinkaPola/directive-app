import {Directive, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[MyConfirm]'
})
export class ConfirmDirective {

  @Input('MyConfirm')
  onConfirmed: Function = () => {}

@HostListener('click') onConfirm (event: Event) {
    const confirmed = window.confirm('Are you shuare?');
    if (confirmed) {
      this.onConfirmed();
    }
  }

}

import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDemo]'
})
export class DemoDirective {

  constructor() { }

  @HostBinding('class.open') variableName = false;
  @HostListener('click')

  myFunction() {
    this.variableName = !this.variableName;
  }
  
    

}

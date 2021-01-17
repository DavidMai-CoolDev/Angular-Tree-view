import {
  Directive, HostBinding, Inject, Input, OnInit, OnDestroy, HostListener
} from '@angular/core';

import { AppDropdownDirective } from './dropdown.directive';

@Directive({
  selector: '[testOpenLink]'
})
export class TestDirective {

  constructor(){}
    @HostBinding('class.open')
    @HostListener('click')
    protected _open:boolean = false;
    myFunction() {
      this._open = !this._open;
    }
    

}

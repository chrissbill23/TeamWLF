import {Directive, HostBinding, OnChanges} from '@angular/core';

@Directive({
  selector: '[appDataShow]'
})
export class DataShowDirective {
  @HostBinding('data-show')
  showId;
  constructor() { }

}

import { Directive , ElementRef  } from '@angular/core';

@Directive({
  selector: '[appGreenEl]'
})
export class GreenElDirective {

  constructor(el:ElementRef) {
    el.nativeElement.style.color="green";
   }
  
}

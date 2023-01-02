import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNext]'
})
export class NextDirective {

  constructor(private ele:ElementRef) { }
@HostListener('click')
nextFunc(){
  var elm=this.ele.nativeElement.parentElement.parentElement.children[0];
  var item=elm.getElementsByClassName("item");
  elm.append(item[0])
  // console.log(item)
}
}

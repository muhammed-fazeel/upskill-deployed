import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPrev]'
})
export class PrevDirective {

  constructor(private ele:ElementRef) { }
  @HostListener('click')
  prevFunc(){
    var elm=this.ele.nativeElement.parentElement.parentElement.children[0];
    var item=elm.getElementsByClassName("item");
    elm.prepend(item[item.length-1])
    // console.log(item)
}
}

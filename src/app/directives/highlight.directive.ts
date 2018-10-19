import { Directive, ElementRef, Input } from '@angular/core';
import $ from 'jquery/dist/jquery'

@Directive({
  selector: '[appHighlight]',
  exportAs: "appHighlight"
})
export class HighlightDirective {

  @Input()
  appHighlight: string|undefined;

  totalTime:number = 0;
  lastTime:number = 0;
  enteredTime:number|null=null;

  constructor(private elementref: ElementRef) { }

  ngOnInit(){
     var target = (this.elementref.nativeElement as HTMLElement);
     //en TS
     /*target.addEventListener("mouseover", ()=>{
       this.enteredTime=Date.now();
      target.style.background=this.appHighlight?this.appHighlight:'red';
    })*/
    //en jQuery
    $(target).mouseover(e=>{
      this.enteredTime=Date.now();
      target.style.background=this.appHighlight?this.appHighlight:'red';
    })
    target.addEventListener("mouseout", ()=>{
      this.lastTime=Date.now()-this.enteredTime!;
      this.totalTime+=this.lastTime;
      target.style.background=null;
    })
  }
}

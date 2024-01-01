import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[zmbhPostBtn]'
})
export class PostButtonDirective implements OnInit {

  private _isInvalid: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @Input('zmbhPostBtn')
  set isInvalid(value: boolean) {
    this._isInvalid = value;
    if(this._isInvalid){
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'grey');
      this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
    }else{
      this.renderer.setStyle(this.el.nativeElement, 'background-color', '#2b8c7b');
      this.renderer.setStyle(this.el.nativeElement, 'color', '#e0edf3');
    }
  }

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'width', '300px');
    this.renderer.setStyle(this.el.nativeElement, 'height', '50px');
    this.renderer.setStyle(this.el.nativeElement, 'border', '0');
  }
}

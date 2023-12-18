import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[zmbhContactBtn]'
})
export class ContactButtonDirective implements OnInit {


  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // Set button styles
    this.renderer.setStyle(this.el.nativeElement, 'width', '300px');
    this.renderer.setStyle(this.el.nativeElement, 'height', '50px');
    this.renderer.setStyle(this.el.nativeElement, 'border', '0');

    this.renderer.setStyle(this.el.nativeElement, 'background-color', '#2b8c7b');
    this.renderer.setStyle(this.el.nativeElement, 'color', '#e0edf3');
  }
}

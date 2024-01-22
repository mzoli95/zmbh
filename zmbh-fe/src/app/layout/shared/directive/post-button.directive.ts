import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[zmbhPostBtn]',
})
export class PostButtonDirective {
  private _isInvalid: boolean = false;
  private _isLoading: boolean = false;

  @Input('zmbhPostBtn')
  set isInvalid(value: boolean) {
    this._isInvalid = value;
    if (this._isInvalid) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'grey');
      this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
    } else {
      this.renderer.setStyle(
        this.el.nativeElement,
        'background-color',
        '#2b8c7b'
      );
      this.renderer.setStyle(this.el.nativeElement, 'color', '#e0edf3');
    }
  }

  @Input()
  set isLoading(value: boolean) {
    this._isLoading = value;
    this.updateLoadingState();
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'width', '300px');
    this.renderer.setStyle(this.el.nativeElement, 'height', '50px');
    this.renderer.setStyle(this.el.nativeElement, 'border', '0');
    this.createLoaderElement();
  }

  private createLoaderElement() {
    const spinnerDiv = this.renderer.createElement('div');
    this.renderer.addClass(spinnerDiv, 'spinner-loader');
    this.renderer.setStyle(spinnerDiv, 'display', 'none');
    this.renderer.appendChild(this.el.nativeElement, spinnerDiv);
  }

  private updateLoadingState() {
    const spinnerDiv = this.el.nativeElement.querySelector('.spinner-loader');
    if (spinnerDiv) {
      if (this._isLoading) {
        this.renderer.setStyle(spinnerDiv, 'display', 'inline-block');
      } else {
        this.renderer.setStyle(spinnerDiv, 'display', 'none');
      }
    }
  }
}

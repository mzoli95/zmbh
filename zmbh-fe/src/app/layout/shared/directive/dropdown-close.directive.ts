import { Directive, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[mzbhNavbarToggle]',
})
export class DropdownDirective {
  private isOpen = false;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
    // Dokumentum szintű kattintások figyelése
    this.renderer.listen('window', 'click', (e: Event) => {
      // Ellenőrizzük, hogy a kattintás a direktívával ellátott elemen kívül történt-e
      if (!this.elRef.nativeElement.contains(e.target) && this.isOpen) {
        this.toggleNavbar();
      }
    });
  }

  @HostListener('click', ['$event']) onToggle(event: Event) {
    event.stopPropagation(); // Megakadályozza az esemény buborékolását
    this.toggleNavbar();
  }

  private toggleNavbar() {
    this.isOpen = !this.isOpen;
    const navbar = document.getElementById('navbarSupportedContent');
    if (navbar) {
      if (this.isOpen) {
        navbar.classList.add('show');
      } else {
        navbar.classList.remove('show');
      }
    }
  }
}

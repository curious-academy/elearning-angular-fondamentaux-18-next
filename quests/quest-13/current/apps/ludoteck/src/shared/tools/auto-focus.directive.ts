import { AfterViewInit, Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]'
})
export class AutoFocusDirective implements AfterViewInit {
  private readonly element = inject(ElementRef)

  ngAfterViewInit(): void {
    this.element.nativeElement.focus()
  }
}

import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appNumericInput]'
})
export class NumericInputDirective {
  @Input() maxLength: number = 10;

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const inputElement = event.target as HTMLInputElement;

    // Allow certain keys like backspace, delete, arrow keys, etc.
    if (
      event.key === 'Backspace' ||
      event.key === 'Delete' ||
      event.key === 'ArrowLeft' ||
      event.key === 'ArrowRight' ||
      event.key === 'Tab'
    ) {
      return;
    }

    // Allow only numeric characters and enforce maximum length
    if (!/^\d$/.test(event.key) || inputElement.value.length >= this.maxLength) {
      event.preventDefault();
    }
  }
}

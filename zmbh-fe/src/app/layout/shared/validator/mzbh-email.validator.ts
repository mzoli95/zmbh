import { AbstractControl } from '@angular/forms';

export function mzbhEmailValidator(control: AbstractControl) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!emailRegex.test(control.value)) {
    return { invalidEmail: true };
  }
  return null;
}

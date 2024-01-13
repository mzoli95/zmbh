import { AbstractControl } from '@angular/forms';

export function mzbhSpecialCharValidator(control: AbstractControl) {
  const specialChar = /[!@#$%^&*(),.?":{}|<>]/;

  if (!specialChar.test(control.value)) {
    return { specialCharRequired: true };
  }
  return null;
}

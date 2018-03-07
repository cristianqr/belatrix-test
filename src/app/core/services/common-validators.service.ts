import { AbstractControl } from '@angular/forms';
export class CommonValidators {
  static number(control: AbstractControl) {
    if (!control.value) {
      return null;
    }

    if (isNaN(control.value.replace(',', ''))) {
      return { invalidNumber: true };
    }

    return null;
  }
}

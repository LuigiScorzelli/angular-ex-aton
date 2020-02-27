import { AbstractControl } from '@angular/forms';

export function PasswordValidator(control: AbstractControl): {[key: string] : boolean} | null {
  const passsword = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  return passsword && confirmPassword && passsword.value !== confirmPassword.value ? { 'misMatch' : true } : null;
}

import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}
@Component({
  selector: 'app-register-two',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './register-two.component.html',
  styleUrl: './register-two.component.css',
})
export class RegisterTwoComponent {
  userRegisterData = new FormGroup({
    userName: new FormControl('Hamada2', [
      Validators.required,
      Validators.minLength(10),
      forbiddenNameValidator(/bob/i), // <-- Here's how you pass in the custom validator.
    ]),
    userEmail: new FormControl('', [Validators.required]),
    userPassword: new FormControl('', [Validators.required]),
    userAddresses: new FormGroup({
      city: new FormControl('', []),
      country: new FormControl('', []),
    }),
  });
  userRegisterDataWithFormBuilder: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userRegisterDataWithFormBuilder = this.fb.group({
      userName: [
        'hamada',
        [
          Validators.minLength(5),
          Validators.required,

          forbiddenNameValidator(/bob/i), // <-- Here's how you pass in the custom validator.
        ],
      ],
      userEmail: ['w@gmail.com', [Validators.required]],
      userPassword: ['', [Validators.required]],
      userAddresses: this.fb.group({
        city: ['', []],
        country: ['', []],
      }),
    });
  }

  get userName() {
    return this.userRegisterData.get('userName') as FormControl;
  }

  get userNameErrors() {
    if (!this.userName.touched || !this.userName.dirty) return;
    const errors = this.userName.errors;
    if (!errors) return null;

    if (errors['required']) {
      return 'Username is required';
    }

    if (errors['minlength']) {
      return `Username must be at least ${errors['minlength'].requiredLength} characters long`;
    }

    return null; // No errors
  }

  handleSubmit() {
    if (this.userRegisterData.valid) {
      console.log(this.userRegisterData.value);
    } else {
      console.log('Form is invalid');
    }
  }

  handleSubmitWithFormBuilder() {
    if (this.userRegisterDataWithFormBuilder.valid) {
      console.log(this.userRegisterDataWithFormBuilder.value);
    } else {
      console.log('Form is invalid');
    }
  }
}

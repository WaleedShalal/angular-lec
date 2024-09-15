import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  userNameErrorsProp: string | null = null;
  userInfoForm = new FormGroup({
    userName: new FormControl('hamada', [
      Validators.minLength(10),
      Validators.required,
    ]),
    userEmail: new FormControl('', [Validators.required]),
  });
  userInfoWithFormBuilder: FormGroup; // Declared the FormGroup

  constructor(private fb: FormBuilder) {
    // Moved the FormGroup initialization inside the constructor
    this.userInfoWithFormBuilder = this.fb.group({
      userName: ['hamada', [Validators.minLength(5), Validators.required]],
      userEmail: ['w@gmail.com', [Validators.required]],
    });
  }

  get userNameErrors() {
    if (!this.userInfoForm.dirty) return false;
    return !!Object.keys(this.userInfoForm.controls.userName.errors || {})
      .length;
  }

  onSubmit() {
    console.log(this.userInfoForm);
    console.log(this.userInfoForm.value);
    this.userInfoForm.reset();

    console.log(this.userInfoWithFormBuilder);
  }
}

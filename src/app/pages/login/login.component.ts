import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  errors: string = '';
  submitUserInfo(values: NgForm) {
    console.log('Hello user info', values.form.controls);
    // this.errors = values.form.controls.
  }
}

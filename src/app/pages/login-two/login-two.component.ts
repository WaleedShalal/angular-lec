import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-two',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-two.component.html',
  styleUrl: './login-two.component.css',
})
export class LoginTwoComponent {
  getFormData(values: NgForm) {
    console.log('Hello user Data', values);
  }
}

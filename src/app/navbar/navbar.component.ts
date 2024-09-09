import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor() {
    console.log('3- navbar constructor');
  }

  ngOnInit() {
    console.log('4- navbar init');
  }
}

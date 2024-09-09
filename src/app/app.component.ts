import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { TheFooterComponent } from './the-footer/the-footer.component';

@Component({
  selector: 'app-root', // tag name
  standalone: true,
  imports: [RouterOutlet, CommonModule, NavbarComponent, TheFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
// Pascal case MyCusomComponent
export class AppComponent {
  title = 'This Is App Component';
  description = 'This Compnent Contain All Project Components';
  imagePath =
    'https://builtin.com/sites/www.builtin.com/files/styles/ckeditor_optimize/public/inline-images/5_React.png';
  isRed = true;
  showFooter = true;
  myNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  myFavDay: string = 'SATe';
  onButtonClick(e: object, name: string) {
    console.log('Button Clicked', e, name);
  }

  handleShowFooter() {
    this.showFooter = !this.showFooter;
  }

  constructor() {
    console.log('1- app constructor');
  }

  ngOnInit() {
    console.log('2- app init');
  }

  ngAfterViewInit() {
    console.log('7- after app and childs init');
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-the-footer',
  standalone: true,
  imports: [],
  templateUrl: './the-footer.component.html',
  styleUrl: './the-footer.component.css',
})
export class TheFooterComponent {
  constructor() {
    console.log('5- footer constructor');
  }

  ngOnInit() {
    console.log('6- footer init');
    const popoverTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="popover"]')
    );
    popoverTriggerList.map(function (popoverTriggerEl) {
      return new (window as any).bootstrap.Popover(popoverTriggerEl);
    });
  }

  ngOnDestroy() {
    console.log('Footer has been removed');
  }
}

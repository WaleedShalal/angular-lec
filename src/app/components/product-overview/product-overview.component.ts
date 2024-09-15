import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-overview',
  standalone: true,
  imports: [],
  templateUrl: './product-overview.component.html',
  styleUrl: './product-overview.component.css',
})
export class ProductOverviewComponent {
  @Input() id!: string;
  ngOnInit(): void {
    console.log('Second way to get id from url From Nested Child', this.id);
  }
}

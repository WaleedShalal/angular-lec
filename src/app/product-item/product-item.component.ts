import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';

interface Product {
  id: number;
  userId: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [TitleCasePipe, UpperCasePipe],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() sendProductId = new EventEmitter();
  @Output() sendChildName = new EventEmitter();
  childName = 'TEST NAME';
  childAge = 1000;

  ngOnInit() {
    this.sendChildName.emit('Hamada');
  }

  getProductId(id: number) {
    this.sendProductId.emit(id);
  }
}

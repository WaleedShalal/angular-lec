import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.css',
})
export class ProductInfoComponent {
  constructor(private router: Router, private activeRoute: ActivatedRoute) {}

  productId: string | null = null;

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(
      (param) => (this.productId = param.get('id'))
    );
  }

  goHome() {
    this.router.navigate(['']);
  }
  goBack() {
    // this.router.navigate(['.']); // Review it
  }
}

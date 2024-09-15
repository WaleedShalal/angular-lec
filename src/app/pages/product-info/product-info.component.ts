import { Component, Input } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-product-info',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './product-info.component.html',
  styleUrl: './product-info.component.css',
})
export class ProductInfoComponent {
  @Input() id!: string;
  constructor(private router: Router, private activeRoute: ActivatedRoute) {}

  productId: string | null = null;

  ngOnInit(): void {
    console.log('Second way to get id from url', this.id);
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

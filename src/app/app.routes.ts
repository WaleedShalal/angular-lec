import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'product-list',
    component: ProductListComponent,
  },
  {
    path: 'product-info/:id',
    component: ProductInfoComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

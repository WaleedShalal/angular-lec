import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductOverviewComponent } from './components/product-overview/product-overview.component';
import { ProductTitlesComponent } from './components/product-titles/product-titles.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

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
    children: [
      {
        path: 'overview', // product-info/:id/overview
        component: ProductOverviewComponent,
      },
      {
        path: 'titles',
        component: ProductTitlesComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

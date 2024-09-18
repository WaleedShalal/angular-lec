import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductOverviewComponent } from './components/product-overview/product-overview.component';
import { ProductTitlesComponent } from './components/product-titles/product-titles.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PostsComponent } from './pages/posts/posts.component';
import { PostsNewsComponent } from './components/posts-news/posts-news.component';
import { PostsVideosComponent } from './components/posts-videos/posts-videos.component';
import { PostInfoComponent } from './pages/post-info/post-info.component';
import { LoginTwoComponent } from './pages/login-two/login-two.component';
import { RegisterTwoComponent } from './pages/register-two/register-two.component';
import { HamadaComponent } from './pages/hamada/hamada.component';

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
    path: 'posts',
    component: PostsComponent,
    children: [
      {
        path: 'news',
        component: PostsNewsComponent,
      },
      {
        path: 'videos',
        component: PostsVideosComponent,
      },
    ],
  },
  {
    path: 'login2',
    component: LoginTwoComponent,
  },
  {
    path: 'register2',
    component: RegisterTwoComponent,
  },
  {
    path: 'posts/:id',
    component: PostInfoComponent,
  },
  {
    path: 'hamada',
    component: HamadaComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

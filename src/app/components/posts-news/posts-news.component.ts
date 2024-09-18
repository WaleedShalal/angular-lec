import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-posts-news',
  standalone: true,
  imports: [],
  templateUrl: './posts-news.component.html',
  styleUrl: './posts-news.component.css',
})
export class PostsNewsComponent {
  @Input() id!: string;

  ngOnInit() {
    console.log('Id from Child News', this.id);
  }
}

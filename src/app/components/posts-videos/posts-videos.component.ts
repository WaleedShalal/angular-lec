import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-posts-videos',
  standalone: true,
  imports: [],
  templateUrl: './posts-videos.component.html',
  styleUrl: './posts-videos.component.css',
})
export class PostsVideosComponent {
  @Input() id!: string;

  ngOnInit() {
    console.log('Id from Child Videos', this.id);
  }
}

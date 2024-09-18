import { Component, Input, OnInit } from '@angular/core';
import { PostItemComponent } from '../../components/post-item/post-item.component';

@Component({
  selector: 'app-post-info',
  standalone: true,
  imports: [PostItemComponent],
  templateUrl: './post-info.component.html',
  styleUrl: './post-info.component.css',
})
export class PostInfoComponent implements OnInit {
  @Input() id!: string;

  ngOnInit() {
    console.log('Id from Parent', this.id);
  }
}

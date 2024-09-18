import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-item',
  standalone: true,
  imports: [],
  templateUrl: './post-item.component.html',
  styleUrl: './post-item.component.css',
})
export class PostItemComponent {
  @Input() id!: string;

  ngOnInit() {
    console.log('Id from Child', this.id);
  }
}

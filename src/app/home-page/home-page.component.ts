import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, RouterModule, FooterComponent]
})

export class HomePageComponent {
  public widgets: Array<any> = [
    {
      title: 'Chat.E1',
      image: 'assets/img/ai2.png',
      path: 'chatE1',
      desc:'Chat.E1 is an artificial intelligence language model developed by using chatGPT API. You can ask any thing & in any language.'
    },
    {
      title: 'Image.E1',
      image:
        'assets/img/artist.png',
      path: 'imageE1',
      desc:'Image.E1 is an AI system that can create images and art from a description in natural language by using DELL-E2 API.'
    }
  ];

  constructor(private router: Router) {}

  onClick(widget: any) {
    this.router.navigateByUrl(widget.path);
  }
}

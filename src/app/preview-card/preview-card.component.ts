import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from './components/title/title.component';
import { CardComponent } from './components/card/card.component';

@Component({
  selector: 'app-preview-card',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './preview-card.component.html',
  styleUrl: './preview-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PreviewCardComponent {}

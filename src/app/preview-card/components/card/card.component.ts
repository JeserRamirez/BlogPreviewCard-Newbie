import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'card',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {}

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p
      [style.color]="isHovering ? hover : 'inherit'"
      (mouseover)="isHovering = true"
      (mouseout)="isHovering = false"
    >
      {{ title | uppercase }}
    </p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {
  @Input() title!: string;
  @Input() hover!: string;

  isHovering = false;
}

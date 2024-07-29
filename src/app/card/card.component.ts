import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {

  student = input.required<Student>();

  nameSelected = output<string>();

  handleInfoClick(name: string): void {
    this.nameSelected.emit(name);
  }
}

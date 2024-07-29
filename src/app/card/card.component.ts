import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../app.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() data!: Student;

  @Output() addInfoEvent = new EventEmitter<string>();

  addInfo(name: string): void {
    this.addInfoEvent.emit(name);
  }
}

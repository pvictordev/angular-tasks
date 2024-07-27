import { Component, Input } from '@angular/core';
import { Employee } from '../app.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() data!: Employee;

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';

export interface Student {
  name: string,
  description: string
};

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  students: Student[] = [
    { name: "Elena", description: "Software Developer Intern @ BearingPoint" },
    { name: "Silviu", description: "Software Developer Intern @ BearingPoint" },
    { name: "Victor", description: "Software Developer Intern @ BearingPoint" },
    { name: "Daniel", description: "Senior Software Engineer @ BearingPoint" }
  ];

  receivedName!: string;
  onAddInfo(name: string): void {
    this.receivedName = name;
  }

}

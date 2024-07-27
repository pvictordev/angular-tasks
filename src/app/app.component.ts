import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  names: string[] = ["Elena", "Silviu", "Victor", "Daniel"];
  isListVisible: boolean = false;

  listToggle(): void {
    this.isListVisible = !this.isListVisible;
    this.names = this.names.sort();
  }

}

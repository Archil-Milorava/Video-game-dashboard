import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SearchBarComponent } from './Components/search-bar/search-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSlideToggleModule, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}

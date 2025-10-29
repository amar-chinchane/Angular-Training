import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatalogModule } from './catalog/catalog.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CatalogModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Transflower Store';
}

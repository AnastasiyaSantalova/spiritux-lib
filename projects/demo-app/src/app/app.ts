import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpirituxButtonComponent } from 'spiritux';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SpirituxButtonComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'demo-app';
}

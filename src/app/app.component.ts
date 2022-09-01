import { Component } from '@angular/core';
import { CepService } from './shared/cep.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curso-web';
  colorRed = false;

  constructor(
    private cepService: CepService
  ) {}
}

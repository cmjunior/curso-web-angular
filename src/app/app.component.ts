import { UiServiceService } from './shared/ui-service.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curso-web';
  colorRed = false;

  isMobile$!: Observable<boolean>

  constructor(
    private uiService: UiServiceService
  ) {
    this.isMobile$ = this.uiService.isMobile
  }
}

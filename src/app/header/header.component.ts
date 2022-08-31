import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() titulo = '';

  constructor() { }

  ngOnInit(): void {
  }

  onBotaoClicked(botao: string) {
    window.alert(`Botão ${botao} clicado`); 
  }

}

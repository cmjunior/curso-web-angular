import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface TextoBotoes {
  texto: string,
  textoBold: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() titulo = '';

  botoes: TextoBotoes[] = 
  [
    { texto: 'Ministério da ', textoBold: 'Economia'}, 
    { texto: 'Acesso à ', textoBold: 'Imprensa'}, 
    { texto: 'Canais de ', textoBold: 'Negócios'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onBotaoClicked(botao: string) {
    window.alert(`Botão ${botao} clicado`); 
  }

}

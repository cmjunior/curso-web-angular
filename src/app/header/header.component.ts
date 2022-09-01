import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface TextoBotoes {
  texto: string,
  textoBold: string,
  link: string
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
    { texto: 'Início', textoBold: '', link: ''}, 
    { texto: 'Recente', textoBold: '', link: ''}, 
    { texto: 'Matérias', textoBold: '', link: ''},
    { texto: 'Cadastro', textoBold: '', link: 'cadastro'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onBotaoClicked(botao: string) {
    window.alert(`Botão ${botao} clicado`); 
  }

}

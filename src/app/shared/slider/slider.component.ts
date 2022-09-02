import { Component, Input, OnInit, TemplateRef } from '@angular/core';

export interface TextoBotoes {
  texto: string,
  textoBold: string,
  link: string
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() template!: TemplateRef<any>

  scrollLeft = 0;
  scrollLeftMax = 0;
  containerWidth = 0;
  sliderHeight = 0;
  buttonTopPosition = 0;
  scrollWidth = 200;

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

  doScrollForward() {
    
  }

  doScrollBack() {
    
  }
}

import { CepService } from './../shared/cep.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent implements OnInit {
  @Input() texto: string = '';
  @Output() clicked = new EventEmitter();
  
  constructor(
    private cepService: CepService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onClick() {
    this.clicked.emit(this.texto);
  }

}

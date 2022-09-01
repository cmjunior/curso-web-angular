import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() texto = '';
  @Input() textoBold = '';
  @Input() linkBotao = '';
  
  @Input() showImage = false;
  
  constructor(    
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onNavigate() {    
    this.router.navigateByUrl(this.linkBotao)
  }

}

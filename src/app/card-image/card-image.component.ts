import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.scss']
})
export class CardImageComponent implements OnInit {  
  images: any[] = [
    {
      "previewImageSrc": "assets/img-tempo-vazamento.png",
      "thumbnailImageSrc": "assets/img-tempo-vazamento.png",
      "alt": "Description for Image 1",
      "title": "Title 1"
    },
    {
      "previewImageSrc": "assets/imagem-cryptocurrency.png",
      "thumbnailImageSrc": "assets/imagem-cryptocurrency.png",
      "alt": "Description for Image 1",
      "title": "Title 1"
    },
    {
      "previewImageSrc": "assets/imagem-custo-vazamento.png",
      "thumbnailImageSrc": "assets/imagem-custo-vazamento.png",
      "alt": "Description for Image 1",
      "title": "Title 1"
    },
    {
      "previewImageSrc": "assets/imagem-machine-learning.png",
      "thumbnailImageSrc": "assets/imagem-machine-learning.png",
      "alt": "Description for Image 1",
      "title": "Title 1"
    },    
  ]

  responsiveOptions: any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];
  
  constructor() { }

  ngOnInit(): void {
  }

}

import { AfterViewInit, Component, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';

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
export class SliderComponent implements AfterViewInit {
  @ViewChild('container') container!: ElementRef;
  @ViewChild('slider') slider!: ElementRef;
  
  @Input() template!: TemplateRef<any>

  scrollLeft = 0;
  scrollLeftMax = 0;
  containerWidth = 0;
  sliderHeight = 0;
  buttonTopPosition = 0;
  scrollWidth = 200;

  ngAfterViewInit(): void {    
    this.scrollLeftMax = this.slider.nativeElement.scrollLeftMax;
    this.containerWidth = this.container.nativeElement.offsetWidth;
    this.sliderHeight = this.slider.nativeElement.offsetHeight;

    this.buttonTopPosition = this.sliderHeight/2 - 24;
    this.scrollWidth = this.slider.nativeElement.childNodes[0].offsetWidth;

    this.slider.nativeElement.addEventListener('scroll', () => {
      this.scrollLeft = this.slider.nativeElement.scrollLeft;
    })
  }

  doScrollForward() {
    this.slider.nativeElement.scrollLeft += this.scrollWidth;
  }

  doScrollBack() {
    this.slider.nativeElement.scrollLeft -= this.scrollWidth;
  }
}

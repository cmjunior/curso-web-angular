import { ElementRef, Directive, Input, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[enterAsTab]'
})
export class EnterAsTabDirective {
    @Input() enterAsTab: any;
    
    constructor(private renderer: Renderer2) { }

    @HostListener('keydown', ['$event']) onKeyDown(e: any) {
        if ( e.which == 13 || e.keyCode == 13 ) {
            let nextEl = this.renderer.selectRootElement(this.enterAsTab, true)
            e.preventDefault();
            if ( nextEl ) {
                nextEl.focus()
            }
        }

        return
    }
}
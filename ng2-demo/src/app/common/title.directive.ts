import { Directive, ElementRef } from '@angular/core';

@Directive({
	selector: '[titleDirective]'
})

export class TitleDirective{
	constructor(el: ElementRef){
		el.nativeElement.style.color = 'white';
	}
}
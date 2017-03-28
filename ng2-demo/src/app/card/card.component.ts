import { Component, Input } from '@angular/core';

@Component({
	selector: 'card-component',
	template: `<a routerLink="/student"><div class='card card-1'>
				<h2 titleDirective>{{name}}</h2>
				<h4>Date of Birth: {{dob| date}}</h4>
				</div></a>`
})

export class CardComponent{
	@Input() name: string;
	@Input() dob: Date;
}
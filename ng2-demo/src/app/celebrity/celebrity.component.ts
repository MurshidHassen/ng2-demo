import { Component } from '@angular/core';

import { CelebrityService } from '../celebrity/celebrity.service';
import { Celebrity } from '../celebrity/celebrity';

@Component({
	selector: 'celebrity-component',
	templateUrl: 'celebrity.component.html',
	styleUrls: ['celebrity.component.css']
})

export class CelebrityComponent {
	celebrity: Celebrity;
	isSelected = true;

	celebrities: Celebrity[];
	constructor(private celebService: CelebrityService) {
		this.celebrities = celebService.getData();
		this.celebrity = this.celebrities[0];
	}

	changeColor = function () {
		this.isSelected = !this.isSelected;
	}
}
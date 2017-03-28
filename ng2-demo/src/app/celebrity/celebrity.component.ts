import {Component} from '@angular/core' ;


@Component({
	selector : 'celebrity-component',
	templateUrl : 'celebrity.component.html',
	styleUrls : ['celebrity.component.css']
})

export class CelebrityComponent {

	celebrity = {
		name : 'Krishnakripa Jayakumar',
		link : 'http://www.facebook.com/kripa.jayakumar',
		image : 'https://img.clipartfest.com/e02b532333ff6c93ba470d1b7989b76c_girl-winking-winking-girl-clipart_256-256.png',
		image2 : 'http://www.clker.com/cliparts/Q/r/R/t/o/t/school-boy-md.png'
	};

	isSelected = true;

	changeColor = function () {
		this.isSelected = !this.isSelected;
	}

}
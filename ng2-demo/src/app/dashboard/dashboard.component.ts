import { Component } from '@angular/core';
import { CelebrityService } from '../celebrity/celebrity.service';
import { Celebrity } from '../celebrity/celebrity';

@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  students: Celebrity[];
  constructor(private celebService: CelebrityService){
  	this.students = celebService.getData();
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CelebrityComponent } from './celebrity/celebrity.component';
import { CardComponent } from './card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TitleDirective } from './common/title.directive';

import { CelebrityService } from './celebrity/celebrity.service';


@NgModule({
  declarations: [
    AppComponent,
    CelebrityComponent,
    CardComponent,
    DashboardComponent,
    TitleDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
    {
      path: '',
      component: DashboardComponent
    },
    {
      path: 'student',
      component: CelebrityComponent
    }
    ])
  ],
  providers: [CelebrityService],
  bootstrap: [AppComponent]
})
export class AppModule { }

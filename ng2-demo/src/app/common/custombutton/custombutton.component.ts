import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'custom-button',
  template: `<button class="story-button mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--accent mdl-button--raised" >{{buttonname}}</button>`
})

export class CustomButtonComponent {
  @Input() buttonname: string;
  
  constructor() {}

  ngOnInit() {
  }
  
}

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
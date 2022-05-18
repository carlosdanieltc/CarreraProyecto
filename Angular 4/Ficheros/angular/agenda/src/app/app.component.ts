import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    <h1>
      {{talk?.title}}
    <h1>
    <app-talks></app-talks>
  `
  ,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  talk: any;

  constructor(){
    this.talk = {title: "RX"};
  }
}

interface Talk{
  title: string;
}

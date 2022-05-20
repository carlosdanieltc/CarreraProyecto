import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <p>Navegación</p>
  <a routerLink="/talks" routerLinkActive="active">Talks</a>
  <a routerLink="/new-talk" routerLinkActive="active">Add New Talk</a>
    <router-outlet></router-outlet>
    <!-- <h1>
      {{talk?.title}}
    <h1> -->
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

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <h1>
    {{talk?.title}}
  <h1>`

  ,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  talk: Talk;
  title = 'agenda';

  constructor(){
    this.talk = {title: "RX"};
  }
}

interface Talk{
  title: string;
}

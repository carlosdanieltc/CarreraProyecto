import { Component } from '@angular/core'; // --> imports

@Component({////////////////////////////////|
  selector: 'app-root',/////////////////////|
  templateUrl: './app.component.html',//////| --> Decorator, Metadata, Template,Styles
  styleUrls: ['./app.component.less']///////|
})//////////////////////////////////////////|

export class AppComponent {/////////////////|  --> Class
  title = 'my-first-angular-app';///////////|
}

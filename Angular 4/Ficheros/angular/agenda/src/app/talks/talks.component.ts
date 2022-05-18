import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TalkService } from '../talk.service';
import { HttpClient } from '@angular/common/http';//En el curso utiliza Http que parece haber sido reemplazado por HttpClient
import 'rxjs/operator/add/map';
import 'rxjs/operator/add/retry';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-talks',
  template: `
    <label for="search">Search</label>
    <input type="text" (keyup)="onKeyUp(search.value)" #search id="search">

    <app-talk *ngFor="let talk of talks" | async [talk]="talk" (talkClicked)="log($event)">
  `,
  styleUrls: ['./talks.component.css']
})
export class TalksComponent implements OnInit {

  talks;
  @ViewChild('search') search: ElementRef;

  constructor(private talkService: TalkService, private http: HttpClient) {
    this.talks = this.talkService
    .getFilteredTalks()
    .subscribe((x: any) => this.talks = x,
    err => console.log('error',err),
    () => console.log('finished!')
    );

    Observable.of(...[2,3,4])
    .map((x: number) => x * 30)
    .subscribe((x: any) => console.log(x));

    // http
    //   .get('http://data.agenda.wedeploy.io/talks')
    //   .map(x => x.json))
    //   .subscribe(x => this.talks = x);

    Observable.range(0,10).map((x: any) => console.log(x)).subscribe((x: any) => console.log(x));
   }

  ngOnInit(): void {
    console.log(this.search);

    Observable.fromEvent(this.search.nativeElement,'keyUp')
    .map((x: any) => x.target.value())
    .filter((x: any) => x.length>3)
    .debounceTime(500)
    .distinctUntilChanged()
    .subscribe((x: any) =>console.log(x));

    Observable.interval(1000).subscribe(x => console.log(x));
  }

  onKeyUp(value: any){
    console.log('clicked!' + value);
  }

  log($event: any){
    console.log('Padre: ',$event);
  }

}

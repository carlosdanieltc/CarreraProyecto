import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-icon',
  templateUrl: './weather-icon.component.html'
})
export class WeatherIconComponent implements OnInit {

  @Input() weatherInfo: string;

  constructor() { }

  ngOnInit() {
  }

}

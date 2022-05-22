import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-container',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.css']
})
export class WeatherContainerComponent implements OnInit {

  cityName = 'app';
  sidebarMode = 'side';

  constructor() { }

  ngOnInit() {
  }

  public search(cityName: string) {
    this.cityName = cityName;
  }


}

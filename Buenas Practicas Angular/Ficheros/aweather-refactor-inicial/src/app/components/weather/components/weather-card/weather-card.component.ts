import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from 'src/app/services/weather-service/weather.service';
import { Weather } from 'src/app/services/weather-service/models/weather.model';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']

})
export class WeatherCardComponent implements OnInit {

  weather: Weather = new Weather();
  cityName: string;

  constructor(
    private _weatherService: WeatherService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(
      params => {
        this.cityName = <string>(params['cityName'] ? params['cityName'] : 'Madrid, ES');
        this._weatherService.getWeatherInfo(this.cityName).subscribe(
          data => {
            if (data['query'].results === undefined) {
              alert('La ciudad buscada no existe');
            } else {
              this.weather = this._weatherService.mapResult(data['query'].results.channel);
            }
          },
          error => {
            alert(error.message);
          }
        );

      }
    );
  }

  public getColorTemperature(): string {
    if (this.weather !== undefined && this.weather.temperature >= 24) {
      return '#EF6C00';
    }

    if (this.weather !== undefined && this.weather.temperature <= 10) {
      return '#0277BD';
    }

    return '#212121';
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Forecast } from '../forecast.model';
import { Weather } from '../weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private urlApi = 'https://query.yahooapis.com/v1/public/yql?q=';
  private selectApi_part1 = 'select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="';
  private selectApi_part2 = '")';
  private jsonParam = '&format=json';

  weather: Weather= new Weather();

  constructor(
    private _http: HttpClient,
    private _weatherService: WeatherService
  ) { }

  ngOnInit() {
    this._weatherService.getWeatherInfo('Madrid, ES').subscribe(
      data => {
        if (data['query'].results === undefined) {
          alert('La ciudad buscada no existe');
        } else {
          this.weather = this._weatherService.mapResult(data['query'].results.channel);
        }
      },
      error => {alert(error.message)}
    );
  }


  public getWeatherInfo(cityName: string): Observable<any> {
    const url = `${this.urlApi}${this.selectApi_part1}${cityName}${this.selectApi_part2}${this.jsonParam}`;
    return this._http.get(url);
  }

  public mapResult(result: any): Weather {
    const weatherInfo = new Weather();
    weatherInfo.city = `${result.location.city}, ${result.location.country}`;
    weatherInfo.date = result.item.condition.date;
    weatherInfo.humidity = result.atmosphere.humidity;
    weatherInfo.info = result.item.condition.text;
    weatherInfo.maxtemperature = result.item.forecast[0].high;
    weatherInfo.mintemperature = result.item.forecast[0].low;
    weatherInfo.pressure = result.atmosphere.pressure;
    weatherInfo.sunrise = result.astronomy.sunrise;
    weatherInfo.sunset = result.astronomy.sunset;
    weatherInfo.temperature = result.item.condition.temp;
    weatherInfo.winddirection = result.wind.direction;
    weatherInfo.windspeed = result.wind.speed;
    weatherInfo.forecasts = new Array<Forecast>();
    for (const forecast of result.item.forecast) {
      const newForecast = new Forecast();
      newForecast.date = forecast.date;
      newForecast.day = forecast.day;
      newForecast.maxTemperature = forecast.high;
      newForecast.minTemperature = forecast.low;
      newForecast.info = forecast.text;
      weatherInfo.forecasts.push(newForecast);
    }
    return weatherInfo;
  }
}

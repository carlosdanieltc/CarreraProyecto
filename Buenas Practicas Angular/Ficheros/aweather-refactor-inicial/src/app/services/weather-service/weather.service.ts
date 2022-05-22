import { Injectable } from '@angular/core';
import { Weather } from './models/weather.model';
import { Forecast } from './models/forecast.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private urlApi = 'https://query.yahooapis.com/v1/public/yql?q=';
  private selectApi_part1 = 'select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="';
  private selectApi_part2 = '")';
  private jsonParam = '&format=json';

  constructor(
    private _http: HttpClient
  ) { }

  public getWeatherInfo(cityName: string): Observable<any> {
    const url = `${this.urlApi}${this.selectApi_part1}${cityName}${this.selectApi_part2}${this.jsonParam}`;
    return this._http.get(url);
  }

  public mapResult(result: any): Weather {
    const weatherInfo = this.mapWeather(result);
    for (const forecast of result.item.forecast) {

      weatherInfo.forecasts.push(this.mapForecast(forecast));
    }
    return weatherInfo;
  }

  private mapForecast(yahooForecast: any): Forecast{
    const newForecast = new Forecast();
    newForecast.date = yahooForecast.date;
    newForecast.day = yahooForecast.day;
    newForecast.maxTemperature = yahooForecast.high;
    newForecast.minTemperature = yahooForecast.low;
    newForecast.info = yahooForecast.text;
    return newForecast;
  }

  public mapWeather(yahooWeather: any): Weather {
    const weatherInfo = new Weather();
    weatherInfo.city = `${yahooWeather.location.city}, ${yahooWeather.location.country}`;
    weatherInfo.date = yahooWeather.item.condition.date;
    weatherInfo.humidity = yahooWeather.atmosphere.humidity;
    weatherInfo.info = yahooWeather.item.condition.text;
    weatherInfo.maxtemperature = yahooWeather.item.forecast[0].high;
    weatherInfo.mintemperature = yahooWeather.item.forecast[0].low;
    weatherInfo.pressure = yahooWeather.atmosphere.pressure;
    weatherInfo.sunrise = yahooWeather.astronomy.sunrise;
    weatherInfo.sunset = yahooWeather.astronomy.sunset;
    weatherInfo.temperature = yahooWeather.item.condition.temp;
    weatherInfo.winddirection = yahooWeather.wind.direction;
    weatherInfo.windspeed = yahooWeather.wind.speed;
    weatherInfo.forecasts = new Array<Forecast>();

    return weatherInfo;
  }

}

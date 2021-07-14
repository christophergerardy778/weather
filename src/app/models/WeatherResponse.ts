import {ILocation} from "./ILocation";
import {ICurrentWeather} from "./ICurrentWeather";
import {IForecast} from "./IForecast";

export interface WeatherResponse {
  location: ILocation;
  current: ICurrentWeather;
  forecast: IForecast;
}

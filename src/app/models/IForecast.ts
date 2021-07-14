import {ICondition} from "./ICondition";

export interface IDay {
  avghumidity: number;
  avgtemp_c: number;
  avgtemp_f: number;
  avgvis_km: number;
  avgvis_miles: number;
  condition: ICondition;
  maxtemp_c: number;
  maxtemp_f: number;
  maxwind_kph: number;
  maxwind_mph: number;
  mintemp_c: number;
  mintemp_f: number;
}

export interface IForecastDay {
  date: string;
  day: IDay;
}

export interface IForecast {
  forecastday: IForecastDay[];
}

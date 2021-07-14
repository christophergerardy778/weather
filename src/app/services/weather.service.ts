import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { WeatherResponse } from "../models/WeatherResponse";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private readonly http: HttpClient) {}

  getCurrentWeather(geoLocation: string) {
    return this.http.get<WeatherResponse>(`${environment.base_url}/forecast.json`, {
      params: {
        key: environment.api_key,
        lang: 'es',
        q: geoLocation,
        days: 5
      }
    })
  }
}

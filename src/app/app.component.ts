import {Component, OnInit} from '@angular/core';
import {WeatherService} from "./services/weather.service";
import {WeatherResponse} from "./models/WeatherResponse";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  error = false;
  response!: WeatherResponse;

  constructor(private readonly weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeather('53.958332, -1.080278');
  }

  getLocationAndWeather() {
    this.error = false;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.getWeather(`${position.coords.latitude}, ${position.coords.longitude}`)
      }, error => {
        this.error = true;
        alert(error.message);
      }, {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      });
    } else {
      alert('GEO LOCATION NO SUPPORTED');
    }
  }

  getWeather(location: string) {
    this.weatherService.getCurrentWeather(location)
      .subscribe(data => { this.response = data })
  }
}

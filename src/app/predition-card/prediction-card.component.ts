import {Component, Input, OnInit} from '@angular/core';
import {IForecastDay} from "../models/IForecast";

@Component({
  selector: 'app-prediction-card',
  templateUrl: './prediction-card.component.html',
  styleUrls: ['./prediction-card.component.scss']
})
export class PredictionCardComponent implements OnInit {

  @Input() foreCast!: IForecastDay;

  constructor() { }

  ngOnInit(): void {
  }

}

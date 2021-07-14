import {Component, Input, OnInit} from '@angular/core';
import {IForecast} from "../models/IForecast";

@Component({
  selector: 'app-predition-card',
  templateUrl: './predition-card.component.html',
  styleUrls: ['./predition-card.component.scss']
})
export class PreditionCardComponent implements OnInit {

  @Input() foreCast!: IForecast;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {

  address = '';
  constructor( private weatherService: WeatherService ) { }

  ngOnInit() {
  }

  // onShow(cityName){
  //   const infor = this.weatherService.getWeather(cityName);
  //   console.log(infor);
  // }

  onGeoCoding(add){
    const infor = this.weatherService.geoCoding(add);
    infor.then(results => console.log(results.results[0].formatted_address));
  }

}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class WeatherService{
    url = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';
    API_KEY = 'AIzaSyAwRhWgmDrsDK0XoFKLXaSJSiKlieY6Vck';

    constructor(private http: Http){}
    
    getWeather(cityName){
        return this.http.get(`${this.url} + ${cityName}`)
        .toPromise()
        .then(resultJSON => resultJSON.json());
    }

    geoCoding(address){
        return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${this.API_KEY}`)
        .toPromise()
        .then(resultJSON => resultJSON.json())
    }
}
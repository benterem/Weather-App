// code for API 

class Forecast{

    constructor(){
        this.key = 'uKIwPuSXgPPZEfy0TGjEQfhx3S2cJJHn';
        this.weatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }

    async updateCity(city){
        const cityDets = await this.getCity(city);
        const weather = await this.getWeather(cityDets.Key);   
        return { cityDets, weather };
    };

    async getCity(city){ 
        const query = `?apikey=${this.key}&q=${city}` // we add the api-key and the city queries
        const response = await fetch(this.cityURI+query); // make the call (fetch returns a promise so we await)
        const data = await response.json(); // (fetch returns a promise which itself returns a response 
        return data[0];                     // object, we use fetch's json() method to get a JSON we can work with)
    }

    async getWeather(id) {
        const query = `${id}?apikey=${this.key}`;
        const response = await fetch(this.weatherURI + query);
        const data = await response.json();
        return data[0];
    };
}
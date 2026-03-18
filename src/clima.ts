import axios from "axios";

class WeatherService {
    private latitude: number;
    private longitude: number;

    constructor(lat: number, lon: number){
        this.latitude = lat;
        this.longitude = lon;
    }

    async obtenerClima(){
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${this.latitude}&longitude=${this.longitude}&current_weather=true`;

        const response = await axios.get(url);

        return response.data;
    }
}

async function main(){
    const weatherService = new WeatherService(22.7702883,-102.5737121); //Instancear el objeto

    const clima = await weatherService.obtenerClima();

    console.log("Clima actual:");
    console.log(clima);
}

main();
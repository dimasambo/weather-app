import {CoordCityType, WeatherType} from "../types/types";
import axios from "axios";

const _accessKey = '04852bc04ef89f05df0792686637ec93'

export const api = {
    getWeather(lat: number, lon: number) {
        return axios.get<WeatherType>(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${_accessKey}`)
            .then(response => response.data)
    },
    getCoordinates(city: string) {
        return axios.get<Array<CoordCityType>>(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${_accessKey}`)
            .then(response => response.data)
    }
}
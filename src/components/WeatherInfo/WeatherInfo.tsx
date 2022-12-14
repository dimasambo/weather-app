import {FC, useEffect, useState} from "react";
import {StyledWeatherInfo} from "./StyledWeatherInfo";
import {useHistory} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {updateWeather} from "../../Redux/weather/weather-slice";
import {State} from "../../Redux/redux-store";
import {CityWeatherType} from "../../types/types";
import weatherImg from '../../assets/media/weather.png'

export const WeatherInfo: FC = () => {
    const history = useHistory()

    const coord: Array<string> = history.location.pathname.split('/')[3].split('_')
    const city: string = history.location.pathname.split('/')[2]
    const lat: number = +coord[0]
    const lon: number = +coord[1]

    const [currentWeatherCity, setCurrentWeatherCity] = useState<Array<CityWeatherType> | null>(null)
    const weather = useSelector((state: State) => state.weather.weatherList)

    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(updateWeather({lat: lat, lon: lon, city: city}))
    }, [])

    useEffect(() => {
        setCurrentWeatherCity(
            weather
                .filter(weatherItem => weatherItem.city === city && weatherItem.lat === lat && weatherItem.lon === lon)
        )
    }, [weather])

    return <StyledWeatherInfo>
        {currentWeatherCity && currentWeatherCity.length !== 0 &&
        <div className={'wrapper'}>
            <div className={'city'}>{currentWeatherCity[0].city}</div>
            <div className={'mainInfo'}>
                <img src={weatherImg}/>
                <div><span>{Math.round(currentWeatherCity[0].weather.main.temp - 273.15)}</span></div>
            </div>
            <div className={'shortDesc'}><span>{currentWeatherCity[0].weather.weather[0].main}</span></div>
            <div className={'feelsLike'}>
                {'Feels like'} <span>{Math.round(currentWeatherCity[0].weather.main.feels_like - 273.15)}</span>
                {'. ' + currentWeatherCity[0].weather.weather[0].description}
            </div>
            <div className={'subInfo'}>
                <div>Wind speed: {currentWeatherCity[0].weather.wind.speed}</div>
                <div>Humidity: {currentWeatherCity[0].weather.main.humidity}</div>
                <div>Min. temperature: <span>{Math.round(currentWeatherCity[0].weather.main.temp_min - 273.15)}</span></div>
            </div>
        </div>
        }
    </StyledWeatherInfo>
}
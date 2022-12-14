import React, {FC, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {WeatherList} from "./WeatherList/WeatherList";
import {State} from "../../Redux/redux-store";
import {updateWeather} from "../../Redux/weather/weather-slice";
import {AddCity} from "../AddCity/AddCity";
import {Select} from "../Select/Select";
import { StyledWeatherHomepage } from "./StyledWeatherHomepage";

export const WeatherHomepage: FC = () => {
    const {weatherList, coord} = useSelector((state: State) => state.weather)

    const dispatch = useDispatch()

    useEffect(() => {
        if (weatherList.length !== 0) {
            weatherList.forEach(weather => {
                // @ts-ignore
                dispatch(updateWeather({lon: weather.lon, lat: weather.lat, city: weather.city}))
            })
        }
        console.log(weatherList)
    }, [])

    return <StyledWeatherHomepage>
        <div className={'addCityWrapper'}>
            <AddCity/>
            {coord?.length !== 0 && <Select coord={coord} />}
        </div>
        {weatherList && <WeatherList weatherList={weatherList}/>}
    </StyledWeatherHomepage>
}
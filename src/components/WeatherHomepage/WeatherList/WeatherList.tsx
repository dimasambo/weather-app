import {CityWeatherType} from "../../../types/types";
import {FC} from "react";
import {Card} from "./Card/Card";
import {StyledWeatherList} from "./StyledWeatherList";


type PropsType = {
    weatherList: Array<CityWeatherType>
}

export const WeatherList: FC<PropsType> = ({weatherList}) => {

    return <StyledWeatherList>
        {weatherList.length === 0
            ? <div className={'noResult'}>No Results</div>
            : weatherList.map((weather) => {
                return <Card key={weather.weather.id} weather={weather}/>
            })
        }
    </StyledWeatherList>
}
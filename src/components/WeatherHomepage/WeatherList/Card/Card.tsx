import {CityWeatherType} from "../../../../types/types";
import {FC, useState} from "react";
import {StyledCard} from "./StyledCard";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {updateWeather, deleteCity} from "../../../../Redux/weather/weather-slice";
import weatherImg from '../../../../assets/media/weather.png'

type PropsType = {
    weather: CityWeatherType
}

export const Card: FC<PropsType> = ({weather}) => {

    const [isUpdated, setIsUpdated] = useState(false)

    const dispatch = useDispatch()

    const onUpdate = () => {
        // @ts-ignore
        dispatch(updateWeather({lon: weather.lon, lat: weather.lat, city: weather.city}))
        setIsUpdated(true)
        setTimeout(() => setIsUpdated(false), 2000)
    }

    const onDelete = () => {
        // @ts-ignore
        dispatch(deleteCity({lon: weather.lon, lat: weather.lat}))
    }

    return <StyledCard>
        <Link to={'/details/' + weather.city + '/' + weather.lat + '_' + weather.lon}>
            <div className={'cardWrapper'}>
                <div className={'header'}>
                    <div className={'update'}
                         onClick={(e) => {
                             e.preventDefault()
                             onUpdate();
                         }}>
                        <img src={isUpdated
                            ? 'https://www.pngall.com/wp-content/uploads/2016/07/Success-PNG-Image.png'
                            : 'https://cdn3.iconfinder.com/data/icons/pixel-perfect-at-16px-volume-3-1/16/5070-512.png'}/>
                    </div>
                    <div className={'delete'}
                         onClick={(e) => {
                             e.preventDefault()
                             onDelete();
                         }}>
                        <img src={'http://cdn.onlinewebfonts.com/svg/img_398870.png'}/>
                    </div>
                </div>
                <div className={'body'}>
                    <div className={'item'}><img src={weatherImg}/></div>
                    <div className={!isUpdated ? 'item temp' : 'item temp updated'}>
                        <span className={'celc'}>{Math.round(weather.weather.main.temp - 273.15)}</span>
                    </div>
                    <div className={'item city'}>{weather.city}</div>
                    <div className={!isUpdated ? 'item subInfo' : 'item subInfo updated'}>
                        {weather.weather.weather[0].main}
                    </div>
                    <div className={!isUpdated ? 'item subInfo' : 'item subInfo updated'}>
                        <span className={'subInfoDesc'}>Feels like:</span>
                        <span className={'celc'}>{Math.round(weather.weather.main.feels_like - 273.15)}</span>
                    </div>
                    <div className={!isUpdated ? 'item subInfo' : 'item subInfo updated'}>
                        <span className={'subInfoDesc'}>Wind:</span>
                        {weather.weather.wind.speed}m/s
                    </div>
                </div>
            </div>
        </Link>
    </StyledCard>
}
import React, {FC} from "react";
import {StyledSelect} from './StyledSelect'
import {CoordCityType} from "../../types/types";
import {requestWeather} from "../../Redux/weather/weather-slice";
import {List} from "antd";
import {useDispatch} from "react-redux";

type PropsType = {
    coord: Array<CoordCityType>
}

export const Select: FC<PropsType> = ({coord}) => {

    const dispatch = useDispatch()

    const onCoordItemClick = (coordItem: CoordCityType) => {
        // @ts-ignore
        dispatch(requestWeather({lat: coordItem.lat, lon: coordItem.lon, city: coordItem.name}))
    }

    return <StyledSelect>
        <List
            size="small"
            bordered
            dataSource={coord}
            renderItem={(coordItem) => <List.Item onClick={() => onCoordItemClick(coordItem)} className={'listItem'}>
                {coordItem.name + ', ' + coordItem.country}
                {coordItem.state && ', ' + coordItem.state}
            </List.Item>}
        />
    </StyledSelect>
}
import {CityWeatherType, CoordCityType, WeatherType} from "../../types/types";
import {api} from "../../api/api";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import initialWeatherList from '../../data/InitialWeatherList.json'

const initialState = {
    weatherList: initialWeatherList as Array<CityWeatherType>,
    coord: [] as Array<CoordCityType>
}

export type InitialStateType = typeof initialState

export const gallerySlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        deleteCity(state: InitialStateType, action: PayloadAction<{ lon: number, lat: number }>) {
            state.weatherList.forEach((weather, index) => {
                if (weather.lon === action.payload.lon && weather.lat === action.payload.lat) {
                    state.weatherList.splice(index, 1)
                }
            })
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(requestWeather.fulfilled, (state, action) => {
                state.weatherList = [
                    ...state.weatherList,
                    {
                        city: action.payload.city,
                        lon: action.payload.data.coord.lon,
                        lat: action.payload.data.coord.lat,
                        weather: action.payload.data
                    }
                ]
                state.coord = []
            })
            .addCase(requestCoordinates.fulfilled, (state, action) => {
                state.coord = [...action.payload]
            })
            .addCase(updateWeather.fulfilled, (state, action) => {
                if (state.weatherList.length !== 0) {
                    state.weatherList.forEach((weather, index) => {
                        if (weather.city === action.payload.city
                            && weather.lon === action.payload.data.coord.lon
                            && weather.lat === action.payload.data.coord.lat) {
                            state.weatherList.splice(index, 1, {
                                city: action.payload.city,
                                lon: action.payload.data.coord.lon,
                                lat: action.payload.data.coord.lat,
                                weather: action.payload.data
                            })
                        }
                    })
                }
            })
    },
});

export const {deleteCity} = gallerySlice.actions

const getWeather = async (coord: { lat: number, lon: number, city: string }) => {
    const {lat, lon, city} = coord

    const data: WeatherType = await api.getWeather(lat, lon);
    return {city, data};
}

export const requestWeather = createAsyncThunk(
    'weather/requestWeather',
    getWeather
)

export const updateWeather = createAsyncThunk(
    'weather/updateWeather',
    getWeather
)

export const requestCoordinates = createAsyncThunk(
    'weather/requestCoordinates',
    async (city: string) => {
        const data: Array<CoordCityType> = await api.getCoordinates(city);
        return data;
    }
)

export default gallerySlice.reducer;
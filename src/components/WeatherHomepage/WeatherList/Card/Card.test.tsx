import React from 'react';
import {render, screen} from '@testing-library/react';
import {Card} from './Card';
import {Provider} from 'react-redux';
// @ts-ignore
import configureStore from 'redux-mock-store';
import {CityWeatherType} from "../../../../types/types";
import {HashRouter} from "react-router-dom";

describe('Card component', () => {
    const initialState = {output: 10};
    const mockStore = configureStore();
    let store;

    const weather: CityWeatherType = {
        city: "Odessa",
        lon: 30.7323,
        lat: 46.4843,
        weather: {
            coord: {
                lon: 30.7323,
                lat: 46.4843
            },
            weather: [
                {
                    id: 500,
                    main: "Rain",
                    description: "light rain",
                    icon: "10n"
                }
            ],
            base: "stations",
            main: {
                temp: 284.5,
                feels_like: 284.09,
                temp_min: 284.5,
                temp_max: 284.5,
                pressure: 998,
                humidity: 92,
                sea_level: 998,
                grnd_level: 991
            },
            visibility: 10000,
            wind: {
                speed: 9.72,
                deg: 181,
                gust: 17.66
            },
            clouds: {
                all: 100
            },
            dt: 1670777717,
            sys: {
                country: "UA",
                sunrise: 1670736639,
                sunset: 1670767801
            },
            timezone: 7200,
            id: 698740,
            name: "Odesa",
            cod: 200
        }
    }

    it('renders Card component', () => {
        store = mockStore(initialState);
        render(
            <Provider store={store}>
                <HashRouter>
                    <Card weather={weather}/>
                </HashRouter>
            </Provider>
        );

        expect(screen.getByRole('link')).toBeInTheDocument();
    });
})

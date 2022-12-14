import React from 'react';
import { render, screen } from '@testing-library/react';
import {AddCity} from './AddCity';
import { Provider } from 'react-redux';
// @ts-ignore
import configureStore from 'redux-mock-store';
import userEvent from "@testing-library/user-event";

describe('AddCity component', () => {
    const initialState = { output: 10 };
    const mockStore = configureStore();
    let store;

    it('renders AddCity component', () => {
        store = mockStore(initialState);
        render(
            <Provider store={store}>
                <AddCity />
            </Provider>
        );

        expect(screen.getByText('Add City')).toBeInTheDocument();
    });

    it('works text input', () => {
        store = mockStore(initialState);
        render(
            <Provider store={store}>
                <AddCity />
            </Provider>
        );

        userEvent.type(screen.getByRole('textbox'), 'Kyiv')

        expect(screen.getByRole('textbox')).toHaveValue('Kyiv')
    });
})

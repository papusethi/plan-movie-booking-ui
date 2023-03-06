import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

describe('Test Cases for App Component', () => {
    it('sample test case', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );

        expect(true).toBe(true);
    });
});

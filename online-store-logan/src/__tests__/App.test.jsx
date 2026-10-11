import { render, screen } from '@testing-library/react';
import App from '../App.jsx';

describe('App', () => {
    test('App displayed correctly', () => {
        // renders the App so it can do a test
        render(
            <App />
        );

        // if all of these are in the App then that means the page loaded correctly
        
    });
});
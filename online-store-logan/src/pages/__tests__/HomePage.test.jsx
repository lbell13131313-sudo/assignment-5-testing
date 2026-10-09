import { render, screen } from '@testing-library/react';
import HomePage from '../HomePage';

describe('HomePage', () => {
    test('Home Page displayed correctly', () => {
        // renders the HomePage so it can do a test
        render(
            <HomePage />
        );

        // if all of these are in the HomePage then that means the page loaded correctly
        expect(screen.getByText("Welcome to Logan's Tech Shop!")).toBeInTheDocument();
        expect(screen.getByText("We have every piece of tech you could ask for!")).toBeInTheDocument();

        expect(screen.getByRole('button')).toBeInTheDocument();

        expect(screen.getByText("Why Shop With Us?")).toBeInTheDocument();

        expect(screen.getByText("Quality Products")).toBeInTheDocument();
        expect(screen.getByText("Carefully curated selection of tech items")).toBeInTheDocument();

        expect(screen.getByText("Fast Shipping")).toBeInTheDocument();
        expect(screen.getByText("Get your orders delivered quickly and safely")).toBeInTheDocument();

        expect(screen.getByText("Great Support")).toBeInTheDocument();
        expect(screen.getByText("Our team is here to help with any questions")).toBeInTheDocument();

    });
});
import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from '../ProductCard.jsx';
import { BrowserRouter } from 'react-router-dom';

// allows a render for a item that is part of the browserrouter
const renderWithRouter = (component) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('ProductCard Button Test', () => {
    test('Product Card displayed correctly', () => {
        // acts as a stand in for the onAddToCart
        const mockPress = vi.fn();

        // renders the ProductCard so it can do a test
        renderWithRouter(
            <ProductCard
                key={1}
                identification={1}
                name={'Mouse'}
                price={4.99}
                image={'https://placehold.co/300x200'}
                description={'Computer mouse'}
                onAddToCart={mockPress}
            />
        );

        // if all of these are in the ProductCard then that means the page loaded correctly
        expect(screen.getByRole('img')).toBeInTheDocument();
        
        // tests the button
        const addCartButton = screen.getByRole('button', { name: /add to cart/i });
        fireEvent.click(addCartButton);

        // if the button worked as intended, there will be no issues
        expect(mockPress).toHaveBeenCalledWith(1);
        expect(mockPress).toHaveBeenCalledTimes(1);
    });
});
import { render, screen } from '@testing-library/react';
import ProductCard from '../ProductCard.jsx';

describe('ProductCard', () => {
    test('Product Card displayed correctly', () => {
        // renders the ProductCard so it can do a test
        render(
            <ProductCard
                key={[]}
                identification={[]}
                name={[]}
                price={[]}
                image={[]}
                description={[]}
                onAddToCart={[]}
            />
        );

        // if all of these are in the ProductCard then that means the page loaded correctly
        expect(screen.getByRole('img')).toBeInTheDocument();
        
        expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
    });
});
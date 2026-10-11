import { render, screen, fireEvent } from '@testing-library/react';
import CartItem from '../CartItem.jsx';

describe('CartItem Remove Button Test', () => {
    test('CartItem displayed correctly', () => {
        // acts as a stand in for the onDeleteFromCart
        const mockPress = vi.fn();

        // renders the CartItem so it can do a test
        render(
            <CartItem
                identification={1}
                name={'Mouse'}
                price={4.99}
                onDeleteFromCart={mockPress}
            />
        );

        // if all of these are in the CartItem then that means the page loaded correctly

        // tests the button
        const deleteCartButton = screen.getByRole('button', { name: /remove/i });
        fireEvent.click(deleteCartButton);

        // if the button worked as intended, there will be no issues
        expect(mockPress).toHaveBeenCalledWith(1);
        expect(mockPress).toHaveBeenCalledTimes(1);
    });
});
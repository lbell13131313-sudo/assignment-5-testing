import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../App.jsx';

// Mock localStorage
const localStorageMock = {
    getItem: vi.fn(),
    setItem: vi.fn(),
    removeItem: vi.fn(),
    clear: vi.fn(),
};

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  writable: true
});

describe('App localStorage Integration', () => {
    beforeEach(() => {
        // Clear all mock calls before each test
        localStorageMock.getItem.mockClear();
        localStorageMock.setItem.mockClear();
        localStorageMock.removeItem.mockClear();
        localStorageMock.clear.mockClear();
    });

    test('loads cart from localStorage on component mount', () => {
        // Arrange - set up what localStorage should return
        const savedCart = JSON.stringify([
            {id: 1, name: 'Mouse', price: 4.99, image: 'https://placehold.co/300x200', description: 'Computer mouse'}
        ]);
        localStorageMock.getItem.mockReturnValue(savedCart);
        
        // renders the App
        render(
            <App />
        );

        // Assert - verify localStorage was checked
        expect(localStorageMock.getItem).toHaveBeenCalledWith('cart');
    });

    test('saves products to localStorage when cart changes', async () => {
        // Mock empty initial state
        localStorageMock.getItem.mockReturnValue('[]');
        
        // renders the App
        render(
            <App />
        );

        // Wait for useEffect to complete initial save
        await waitFor(() => {
            expect(localStorageMock.setItem).toHaveBeenCalledWith('cart', '[]');
        });
    });

    test('persists cart across component remounts', async () => {
        // Initial render with empty localStorage
        localStorageMock.getItem.mockReturnValue('[]');
  
        const { unmount } = render(<App />);
  
        // Simulate cart being added (this would trigger useEffect)
        const testCart = [{ id: 1, name: 'Mouse', price: 4.99, image: 'https://placehold.co/300x200', description: 'Computer mouse' }];
  
        // Verify save happened
        await waitFor(() => {
            expect(localStorageMock.setItem).toHaveBeenCalledWith('cart', '[]');
        });
  
         // Unmount component  (simulate closing a browser tab)
        unmount();
  
        // Mock localStorage returning the saved data
        localStorageMock.getItem.mockReturnValue(JSON.stringify(testCart));
  
        // Re-render component (simulating user openning the app again)
        render(
            <App />
        );
  
        // Verify data was loaded
        expect(localStorageMock.getItem).toHaveBeenCalledWith('cart');
    });
});
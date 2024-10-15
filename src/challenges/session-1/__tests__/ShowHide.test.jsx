import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ShowHide from '../ShowHide';

describe('ShowHide Component', () => {
    test('renders button with "Show" text initially', () => {
        render(<ShowHide />);
        expect(screen.getByText('Show')).toBeInTheDocument();
    });

    test('toggles text and content visibility on button click', () => {
        render(<ShowHide />);
        
        const button = screen.getByText('Show');
        fireEvent.click(button);
        
        expect(screen.getByText('Hide')).toBeInTheDocument();
        expect(screen.getByText('Welcome to React Upskilling Study Group')).toBeInTheDocument();
        
        fireEvent.click(button);
        
        expect(screen.getByText('Show')).toBeInTheDocument();
        expect(screen.queryByText('Welcome to React Upskilling Study Group')).not.toBeInTheDocument();
    });
});
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../TodoList';

describe('TodoList Component', () => {
    test('renders input and add button', () => {
        render(<TodoList />);
        expect(screen.getByPlaceholderText('Add a new todo')).toBeInTheDocument();
        expect(screen.getByText('Add')).toBeInTheDocument();
    });

    test('adds a new todo item', () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText('Add a new todo');
        const addButton = screen.getByText('Add');

        fireEvent.change(input, { target: { value: 'New Todo' } });
        fireEvent.click(addButton);

        expect(screen.getByText('New Todo')).toBeInTheDocument();
    });

    test('removes a todo item', () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText('Add a new todo');
        const addButton = screen.getByText('Add');

        fireEvent.change(input, { target: { value: 'New Todo' } });
        fireEvent.click(addButton);

        const removeButton = screen.getByText('X');
        fireEvent.click(removeButton);

        expect(screen.queryByText('New Todo')).not.toBeInTheDocument();
    });
});
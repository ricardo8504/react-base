import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoListWithCategories from '../TodoListWithCategories';

describe('TodoListWithCategories Component', () => {
  const mockCategories = [
    { id: 1, name: 'Work' },
    { id: 2, name: 'Personal' }
  ];

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockCategories)
      })
    );
  });

  test('renders correctly with initial state', async () => {
    render(<TodoListWithCategories />);
    
    // Check if the title is rendered
    expect(screen.getByText('Todo List with Categories - Class Component')).toBeInTheDocument();
    
    // Check if the input field is rendered
    expect(screen.getByPlaceholderText('Add a new todo')).toBeInTheDocument();
    
    // Check if the select dropdown is rendered
    expect(await screen.findByText('Work')).toBeInTheDocument();
    expect(screen.getByText('Personal')).toBeInTheDocument();
    
    // Check if the Add button is rendered
    expect(screen.getByText('Add')).toBeInTheDocument();
  });

  test('adds a new todo item', async () => {
    render(<TodoListWithCategories />);
    
    // Wait for categories to be loaded
    await screen.findByText('Work');
    
    // Add a new todo
    fireEvent.change(screen.getByPlaceholderText('Add a new todo'), { target: { value: 'New Todo' } });
    fireEvent.click(screen.getByText('Add'));
    
    // Check if the new todo is added to the list
    expect(screen.getByText('New Todo - Work')).toBeInTheDocument();
  });

  test('removes a todo item', async () => {
    render(<TodoListWithCategories />);
    
    // Wait for categories to be loaded
    await screen.findByText('Work');
    
    // Add a new todo
    fireEvent.change(screen.getByPlaceholderText('Add a new todo'), { target: { value: 'New Todo' } });
    fireEvent.click(screen.getByText('Add'));
    
    // Remove the todo
    fireEvent.click(screen.getByText('X'));
    
    // Check if the todo is removed from the list
    expect(screen.queryByText('New Todo - Work')).not.toBeInTheDocument();
  });
});
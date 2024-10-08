import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tabs from '../Tabs';

describe('Tabs Component', () => {
  const tabs = [
    { label: 'Tab 1', content: 'Content 1' },
    { label: 'Tab 2', content: 'Content 2' },
    { label: 'Tab 3', content: 'Content 3' },
  ];

  test('renders tabs and content correctly', () => {
    render(<Tabs tabs={tabs} />);
    
    // Check if all tab labels are rendered
    tabs.forEach(tab => {
      expect(screen.getByText(tab.label)).toBeInTheDocument();
    });

    // Check if the first tab content is rendered by default
    expect(screen.getByText('Content 1')).toBeInTheDocument();
  });

  test('changes content when different tab is clicked', () => {
    render(<Tabs tabs={tabs} />);
    
    // Click on the second tab
    fireEvent.click(screen.getByText('Tab 2'));
    
    // Check if the second tab content is rendered
    expect(screen.getByText('Content 2')).toBeInTheDocument();
  });
});
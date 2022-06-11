import { render, screen } from '@testing-library/react';
import React from 'react';
import PageHeader from '../PageHeader';

describe('PageHeader', () => {
  test('PageHeader Render Snapshoot', () => {
    const { container } = render(<PageHeader />);
    expect(container).toMatchSnapshot();
  });

  test('PageHeader Have Title', () => {
    render(<PageHeader />);
    const titleHeader = screen.getByText('Title');
    expect(titleHeader).toBeInTheDocument();
  });
});

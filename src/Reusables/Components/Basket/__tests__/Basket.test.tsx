import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import Basket from '../Basket';

describe('Basket', () => {
  test('Basket with value', () => {
    const { container } = render(<Basket total={10} />);
    const titleHeader = screen.getByText('10');
    expect(titleHeader).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  test('Basket onClick not calls', () => {
    const onClick = jest.fn();
    render(<Basket total={0} onClick={onClick} />);
    expect(onClick).not.toBeCalled();
  });
  test('Basket onClick not calls', () => {
    const onClick = jest.fn();
    render(<Basket total={0} onClick={onClick} />);
    const pressButton = screen.getByTestId('basket');
    fireEvent.click(pressButton);
    expect(onClick).toBeCalled();
  });
});

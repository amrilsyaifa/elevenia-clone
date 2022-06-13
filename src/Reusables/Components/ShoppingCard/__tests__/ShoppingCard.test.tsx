import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import ShoppingCard from '../ShoppingCard';

describe('ShoppingCard', () => {
  test('ShoppingCard Render with empty data', () => {
    const onClick = jest.fn();
    const { container } = render(
      <ShoppingCard
        onClick={onClick}
        isLoading={false}
        title={''}
        sellerItem=""
        stock={0}
        price={0}
        sellCount={''}
      />
    );
    const getTitleText = screen.queryByText('Title');
    expect(getTitleText).toBeNull();
    expect(container).toMatchSnapshot();
  });
  test('ShoppingCard Render with loading true', () => {
    const onClick = jest.fn();
    const { container } = render(
      <ShoppingCard
        isLoading={true}
        title={'Title'}
        sellerItem=""
        stock={10000}
        price={5000}
        sellCount={100}
        onClick={onClick}
      />
    );
    const getTitleText = screen.queryByText('Title');
    expect(getTitleText).toBeNull();
    expect(container).toMatchSnapshot();
  });
  test('ShoppingCard Render with loading false', () => {
    const onClick = jest.fn();
    const { container } = render(
      <ShoppingCard
        isLoading={false}
        title={'Title'}
        sellerItem=""
        stock={10000}
        price={5000}
        sellCount={100}
        onClick={onClick}
      />
    );
    const getTitleText = screen.queryByText('Title');
    expect(getTitleText).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  test('ShoppingCard Render have sellerItem value', () => {
    const onClick = jest.fn();
    render(
      <ShoppingCard
        isLoading={false}
        title={'Title'}
        sellerItem="seller item"
        stock={10000}
        price={5000}
        sellCount={100}
        onClick={onClick}
      />
    );
    const getSellerItemText = screen.getByText('SKU: seller item');
    expect(getSellerItemText).toBeInTheDocument();
  });
  test('ShoppingCard Render have stock value', () => {
    const onClick = jest.fn();
    render(
      <ShoppingCard
        isLoading={false}
        title={'Title'}
        sellerItem=""
        stock={10000}
        price={5000}
        sellCount={100}
        onClick={onClick}
      />
    );
    const getStockText = screen.queryByText('Stok: 10000');
    expect(getStockText).toBeInTheDocument();
  });

  test('ShoppingCard Render have sellCount value', () => {
    const onClick = jest.fn();
    render(
      <ShoppingCard
        isLoading={false}
        title={'Title'}
        sellerItem=""
        stock={10000}
        price={5000}
        sellCount={100}
        onClick={onClick}
      />
    );
    const getSellCountText = screen.queryByText('Terjual: 100');
    expect(getSellCountText).toBeInTheDocument();
  });
  test('ShoppingCard Render have ProductOptionDetails value', () => {
    const onClick = jest.fn();
    render(
      <ShoppingCard
        isLoading={false}
        title={'Title'}
        sellerItem=""
        stock={10000}
        price={5000}
        sellCount={100}
        onClick={onClick}
        ProductOptionDetails="This Description"
      />
    );
    const getProductOptionDetailsText = screen.queryByText('This Description');
    expect(getProductOptionDetailsText).toBeInTheDocument();
  });
  test('ShoppingCard Render have price value', () => {
    const onClick = jest.fn();
    const currency = '5000';
    render(
      <ShoppingCard
        isLoading={false}
        title={'Title'}
        sellerItem=""
        stock={10000}
        price={currency}
        sellCount={100}
        onClick={onClick}
      />
    );
    const getPriceText = screen.getByTestId('currency');
    expect(getPriceText).toBeInTheDocument();
  });
  test('ShoppingCard Render OnClick call', () => {
    const onClick = jest.fn();
    const currency = '5000';
    render(
      <ShoppingCard
        isLoading={false}
        title={'Title'}
        sellerItem=""
        stock={10000}
        price={currency}
        sellCount={100}
        onClick={onClick}
      />
    );
    const pressButton = screen.getByTestId('click');
    fireEvent.click(pressButton);
    expect(onClick).toBeCalled();
  });
  test('ShoppingCard Render onAddToCart call', () => {
    const onClick = jest.fn();
    const onAddToCart = jest.fn();
    const currency = '5000';
    render(
      <ShoppingCard
        isLoading={false}
        title={'Title'}
        sellerItem=""
        stock={10000}
        price={currency}
        sellCount={100}
        onClick={onClick}
        onAddToCart={onAddToCart}
      />
    );
    const pressButton = screen.getByTestId('add');
    fireEvent.click(pressButton);
    expect(onAddToCart).toBeCalled();
  });
});

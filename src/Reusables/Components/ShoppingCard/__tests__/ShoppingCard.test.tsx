import { render, screen } from '@testing-library/react';
import React from 'react';
import ShoppingCard from '../ShoppingCard';

describe('ShoppingCard', () => {
  test('ShoppingCard Render with empty data', () => {
    const { container } = render(
      <ShoppingCard isLoading={false} title={''} sellerItem="" stock={0} price={0} sellCount={''} />
    );
    const getTitleText = screen.queryByText('Title');
    expect(getTitleText).toBeNull();
    expect(container).toMatchSnapshot();
  });
  test('ShoppingCard Render with loading true', () => {
    const { container } = render(
      <ShoppingCard
        isLoading={true}
        title={'Title'}
        sellerItem=""
        stock={10000}
        price={5000}
        sellCount={100}
      />
    );
    const getTitleText = screen.queryByText('Title');
    expect(getTitleText).toBeNull();
    expect(container).toMatchSnapshot();
  });
  test('ShoppingCard Render with loading false', () => {
    const { container } = render(
      <ShoppingCard
        isLoading={false}
        title={'Title'}
        sellerItem=""
        stock={10000}
        price={5000}
        sellCount={100}
      />
    );
    const getTitleText = screen.queryByText('Title');
    expect(getTitleText).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  test('ShoppingCard Render have sellerItem value', () => {
    render(
      <ShoppingCard
        isLoading={false}
        title={'Title'}
        sellerItem="seller item"
        stock={10000}
        price={5000}
        sellCount={100}
      />
    );
    const getSellerItemText = screen.getByText('Seller’s Item: seller item');
    expect(getSellerItemText).toBeInTheDocument();
  });
  test('ShoppingCard Render have stock value', () => {
    render(
      <ShoppingCard
        isLoading={false}
        title={'Title'}
        sellerItem=""
        stock={10000}
        price={5000}
        sellCount={100}
      />
    );
    const getStockText = screen.queryByText('Stok: 10000');
    expect(getStockText).toBeInTheDocument();
  });
  test('ShoppingCard Render have price value', () => {
    render(
      <ShoppingCard
        isLoading={false}
        title={'Title'}
        sellerItem=""
        stock={10000}
        price={5000}
        sellCount={100}
      />
    );
    const getPriceText = screen.queryByText('5000');
    expect(getPriceText).toBeInTheDocument();
  });
  test('ShoppingCard Render have sellCount value', () => {
    render(
      <ShoppingCard
        isLoading={false}
        title={'Title'}
        sellerItem=""
        stock={10000}
        price={5000}
        sellCount={100}
      />
    );
    const getSellCountText = screen.queryByText('Terjual: 100');
    expect(getSellCountText).toBeInTheDocument();
  });
});

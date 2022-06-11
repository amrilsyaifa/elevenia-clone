import { render, screen } from '@testing-library/react';
import React from 'react';
import ShoppingCard from '../ShoppingCard';

describe('ShoppingCard', () => {
  test('ShoppingCard Render with empty data', () => {
    const { container } = render(
      <ShoppingCard
        isLoading={false}
        title={''}
        percentage={0}
        oldPrice={0}
        price={0}
        storeName={''}
        location={''}
      />
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
        percentage={10}
        oldPrice={10000}
        price={5000}
        storeName={'Yasin Store'}
        location={'Medan'}
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
        percentage={10}
        oldPrice={10000}
        price={5000}
        storeName={'Yasin Store'}
        location={'Medan'}
      />
    );
    const getTitleText = screen.queryByText('Title');
    expect(getTitleText).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  test('ShoppingCard Render have percentage value', () => {
    render(
      <ShoppingCard
        isLoading={false}
        title={'Title'}
        percentage={10}
        oldPrice={10000}
        price={5000}
        storeName={'Yasin Store'}
        location={'Medan'}
      />
    );
    const getPercentageText = screen.queryByText('10%');
    expect(getPercentageText).toBeInTheDocument();
  });
  test('ShoppingCard Render have oldPrice value', () => {
    render(
      <ShoppingCard
        isLoading={false}
        title={'Title'}
        percentage={10}
        oldPrice={10000}
        price={5000}
        storeName={'Yasin Store'}
        location={'Medan'}
      />
    );
    const getOldPriceText = screen.queryByText('10000');
    expect(getOldPriceText).toBeInTheDocument();
  });
  test('ShoppingCard Render have price value', () => {
    render(
      <ShoppingCard
        isLoading={false}
        title={'Title'}
        percentage={10}
        oldPrice={10000}
        price={5000}
        storeName={'Yasin Store'}
        location={'Medan'}
      />
    );
    const getPriceText = screen.queryByText('5000');
    expect(getPriceText).toBeInTheDocument();
  });
  test('ShoppingCard Render have storeName value', () => {
    render(
      <ShoppingCard
        isLoading={false}
        title={'Title'}
        percentage={10}
        oldPrice={10000}
        price={5000}
        storeName={'Yasin Store'}
        location={'Medan'}
      />
    );
    const getStoreNameText = screen.queryByText('Yasin Store');
    expect(getStoreNameText).toBeInTheDocument();
  });
  test('ShoppingCard Render have location value', () => {
    render(
      <ShoppingCard
        isLoading={false}
        title={'Title'}
        percentage={10}
        oldPrice={10000}
        price={5000}
        storeName={'Yasin Store'}
        location={'Medan'}
      />
    );
    const getLocationText = screen.queryByText('Medan');
    expect(getLocationText).toBeInTheDocument();
  });
});

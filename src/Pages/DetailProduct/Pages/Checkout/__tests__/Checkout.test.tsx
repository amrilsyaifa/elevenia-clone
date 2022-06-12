import { render, cleanup } from 'src/Reusables/Mocks/test-utils';
import React from 'react';
import { MatchMediaObject } from 'src/Reusables/Mocks/MatchMediaObjectTest';
import Checkout from '../Checkout';

afterEach(cleanup);
beforeEach(() => {
  MatchMediaObject();
});

describe('Checkout', () => {
  test('Checkout Render Snapshoot', () => {
    const { container } = render(<Checkout />);
    expect(container).toMatchSnapshot();
  });
});

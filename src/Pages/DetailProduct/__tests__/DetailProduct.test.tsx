import { render, cleanup } from '@testing-library/react';
import React from 'react';
import { MatchMediaObject } from 'src/Reusables/Mocks/MatchMediaObjectTest';
import DetailProduct from '../DetailProduct';

afterEach(cleanup);
beforeEach(() => {
  MatchMediaObject();
});

describe('DetailProduct', () => {
  test('DetailProduct Render Snapshoot', () => {
    const { container } = render(<DetailProduct />);
    expect(container).toMatchSnapshot();
  });
});

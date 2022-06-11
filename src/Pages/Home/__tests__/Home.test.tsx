import { render, cleanup } from '@testing-library/react';
import React from 'react';
import { MatchMediaObject } from 'src/Reusables/Mocks/MatchMediaObjectTest';
import Home from '../Home';

afterEach(cleanup);
beforeEach(() => {
  MatchMediaObject();
});

describe('Home', () => {
  test('Home Render Snapshoot', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});

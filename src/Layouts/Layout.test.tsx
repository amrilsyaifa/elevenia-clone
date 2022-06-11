import { render, screen } from '@testing-library/react';
import React from 'react';
import Layout from './Layout';

describe('Layout', () => {
  test('Layout Render Snapshoot', () => {
    const { container } = render(
      <Layout>
        <div>render layout</div>
      </Layout>
    );
    expect(container).toMatchSnapshot();
  });

  test('PageHeader Have Children render correctly', () => {
    const childrenText = 'render layout';
    render(
      <Layout>
        <div>{childrenText}</div>
      </Layout>
    );
    const titleHeader = screen.getByText(childrenText);
    expect(titleHeader).toBeInTheDocument();
  });
});

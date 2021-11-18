import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFound from '../../../../components/Layout/NotFound';

describe('<NotFound />', () => {
  it('renders the NotFound component', () => {
    const component = render(<NotFound />);

    expect(component).toBeTruthy();
  });
});

describe('<NotFound />', () => {
  it('img element should have src attribute', () => {
    const { getByAltText } = render(<NotFound />);
    const attributes = getByAltText('not found').getAttribute('src');

    expect(attributes).not.toBeNull();
  });
});

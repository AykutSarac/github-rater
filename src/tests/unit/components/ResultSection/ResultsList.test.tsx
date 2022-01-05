import React from 'react';
import '@testing-library/jest-dom';
import ResultsList from '../../../../components/ResultSection/ResultsList';
import { renderWithRouter } from '../../testHelper';

const wrap = () => renderWithRouter(<ResultsList />);

describe('<ResultsList />', () => {
  it('renders the ResultsList component', () => {
    const component = wrap();

    expect(component).toBeTruthy();
  });
});

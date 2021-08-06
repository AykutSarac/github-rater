import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Loading from '../../../../components/Layout/Loading';

describe('<Loading />', () => {
  it('renders the Loading component', () => {
    const component = render(<Loading />);

    expect(component).toBeTruthy();
  });
});

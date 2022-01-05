import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProgressBar from '../../../../src/components/ResultSection/ProgressBar';

describe('<ProgressBar />', () => {
  it('renders the ProgressBar component', () => {
    const props = {
      percentage: 25,
      title: 'Test',
    };

    const component = render(<ProgressBar {...props} />);

    expect(component).toBeTruthy();
  });
});

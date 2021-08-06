import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProgressBar, { Props } from '../../../../components/ResultSection/ProgressBar';

describe('<ProgressBar />', () => {
  it('renders the ProgressBar component', () => {
    const props: Props = {
      percentage: 25,
      title: 'Test',
    };

    const component = render(<ProgressBar {...props} />);

    expect(component).toBeTruthy();
  });
});

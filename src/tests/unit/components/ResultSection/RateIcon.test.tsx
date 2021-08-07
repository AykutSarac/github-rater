import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import RateIcon from '../../../../components/ResultSection/RateIcon';

describe('<RateIcon />', () => {
  it('renders the RateIcon component with success class', () => {
    const { container } = render(<RateIcon rate={90} />);

    expect(container.getElementsByClassName('success').length).toBe(1);
  });
});

describe('<RateIcon />', () => {
  it('renders the RateIcon component with warning class', () => {
    const { container } = render(<RateIcon rate={50} />);

    expect(container.getElementsByClassName('warning').length).toBe(1);
  });
});

describe('<RateIcon />', () => {
  it('renders the RateIcon component with danger class', () => {
    const { container } = render(<RateIcon rate={0} />);

    expect(container.getElementsByClassName('danger').length).toBe(1);
  });
});

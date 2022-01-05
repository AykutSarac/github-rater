import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Alert from '../../../../components/Layout/Alert';

describe('<Alert />', () => {
  it('renders the Alert component', () => {
    const enabledProps = {
      children: 'Test',
    };

    const component = render(<Alert {...enabledProps} />);

    expect(component).toBeTruthy();
  });
});

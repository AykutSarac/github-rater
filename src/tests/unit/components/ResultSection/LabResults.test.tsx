import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import LabResults from '../../../../components/ResultSection/LabResults';

describe('<LabResults />', () => {
  it('renders the LabResults component', () => {
    const component = render(<LabResults />);

    expect(component).toBeTruthy();
  });
});

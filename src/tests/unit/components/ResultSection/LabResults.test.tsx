import React from 'react';
import '@testing-library/jest-dom';
import LabResults from '../../../../components/ResultSection/LabResults';
import { renderWithRouter } from '../../testHelper';

const wrap = () => renderWithRouter(<LabResults />);

describe('<LabResults />', () => {
  it('renders the LabResults component', () => {
    const component = wrap();

    expect(component).toBeTruthy();
  });
});

import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ThemeToggler from '../../../../src/components/Layout/ThemeToggler';

describe('<ThemeToggler />', () => {
  it('renders the ThemeToggler component', () => {
    const component = render(<ThemeToggler />);

    expect(component).toBeTruthy();
  });
});

describe('<ThemeToggler />', () => {
  it('should change localStorage theme data', () => {
    const { container } = render(<ThemeToggler />);

    const themeData = JSON.stringify(localStorage.getItem('theme'));
    const themeMode = !themeData || themeData === 'light' ? 0 : 1;
    const icons = container.querySelectorAll('.icon');

    fireEvent.click(icons[themeMode]);

    expect(JSON.stringify(localStorage.getItem('theme'))).not.toMatch(themeData);
  });
});

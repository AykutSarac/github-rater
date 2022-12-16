import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

enum Theme {
  Light = 'light',
  Dark = 'dark',
}

const ThemeToggler: React.FC = () => {
  const elem = React.useRef<HTMLDivElement | null>(null);
  const themeData: string = localStorage.getItem('theme') || Theme.Light;
  const [theme, setTheme] = React.useState(Theme.Light as string);

  React.useEffect(() => {
    setTheme(themeData);
  }, [themeData]);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    if (elem.current) {
      if (theme === Theme.Dark) {
        elem.current.style.left = '34px';
        return;
      }
      elem.current.style.left = '4px';
    }
  }, [theme]);

  const onClick = () => {
    if (theme === Theme.Dark) {
      localStorage.setItem('theme', Theme.Light);
      setTheme(Theme.Light);
      return;
    }
    localStorage.setItem('theme', Theme.Dark);
    setTheme(Theme.Dark);
  };

  return (
    <div className="theme-toggler">
      <div role="button" tabIndex={0} aria-label="Switch Theme" onClick={onClick} className="picker" ref={elem} />
      <FaSun size={14} className="icon sun" onClick={onClick} />
      <FaMoon size={14} className="icon moon" onClick={onClick} />
    </div>
  );
};

export default ThemeToggler;

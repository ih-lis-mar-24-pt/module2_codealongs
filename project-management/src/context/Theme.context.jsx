import { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProviderWrapper = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }

    // ternary option
    // theme === 'light' ? setTheme('dark') : setTheme('light')
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProviderWrapper };

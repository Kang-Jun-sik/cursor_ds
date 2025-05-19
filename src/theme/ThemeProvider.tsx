import React, { createContext, useContext, useState, useCallback } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import type { Theme } from './types';
import { defaultTheme } from './defaultTheme';
import { darkTheme } from './darkTheme';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  mode: ThemeMode;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>('light');
  const [customTheme, setCustomTheme] = useState<Theme | null>(null);

  const theme = customTheme || (mode === 'light' ? defaultTheme : darkTheme);

  const toggleTheme = useCallback(() => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, []);

  const setTheme = useCallback((newTheme: Theme) => {
    setCustomTheme(newTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, mode, toggleTheme, setTheme }}>
      <EmotionThemeProvider theme={theme}>
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 
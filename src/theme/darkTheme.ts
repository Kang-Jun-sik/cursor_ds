import type { Theme } from './types';

export const darkTheme: Theme = {
  colors: {
    primary: {
      main: '#4dabf5',
      light: '#74c0fc',
      dark: '#339af0',
    },
    secondary: {
      main: '#868e96',
      light: '#adb5bd',
      dark: '#495057',
    },
    background: {
      default: '#212529',
      paper: '#343a40',
    },
    text: {
      primary: '#f8f9fa',
      secondary: '#e9ecef',
      disabled: '#adb5bd',
    },
    error: {
      main: '#fa5252',
      light: '#ff6b6b',
      dark: '#e03131',
    },
    warning: {
      main: '#ffd43b',
      light: '#ffd43b',
      dark: '#fcc419',
    },
    success: {
      main: '#51cf66',
      light: '#69db7c',
      dark: '#37b24d',
    },
  },
  typography: {
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
    fontSize: {
      small: '0.875rem',
      medium: '1rem',
      large: '1.25rem',
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
  spacing: {
    xs: '0.25rem',
    small: '0.5rem',
    medium: '1rem',
    large: '1.5rem',
    xl: '2rem',
  },
  borderRadius: {
    small: '0.25rem',
    medium: '0.5rem',
    large: '1rem',
  },
  shadows: {
    small: '0 2px 4px rgba(0,0,0,0.2)',
    medium: '0 4px 6px rgba(0,0,0,0.2)',
    large: '0 10px 15px rgba(0,0,0,0.2)',
  },
  transitions: {
    default: 'all 0.2s ease-in-out',
    fast: 'all 0.1s ease-in-out',
    slow: 'all 0.3s ease-in-out',
  },
}; 
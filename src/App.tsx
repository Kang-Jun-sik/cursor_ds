import React, { useState } from 'react';
import { ThemeProvider } from '@emotion/react';
import { defaultTheme } from './theme/defaultTheme';
import { darkTheme } from './theme/darkTheme';
import { Button } from './components/Button/Button';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const currentTheme = isDarkMode ? darkTheme : defaultTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <div style={{ 
        padding: '2rem', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '1rem',
        backgroundColor: currentTheme.colors.background.default,
        minHeight: '100vh',
        color: currentTheme.colors.text.primary,
        transition: currentTheme.transitions.default
      }}>
        <div style={{ position: 'fixed', top: '1rem', right: '1rem' }}>
          <Button 
            variant="outlined" 
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </Button>
        </div>

        <h1>Button Component Test</h1>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outlined">Outlined Button</Button>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button size="small">Small Button</Button>
          <Button size="medium">Medium Button</Button>
          <Button size="large">Large Button</Button>
        </div>

        <div>
          <Button fullWidth>Full Width Button</Button>
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button disabled>Disabled Button</Button>
          <Button variant="outlined" disabled>Disabled Outlined</Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

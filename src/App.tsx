import { ThemeProvider, useTheme } from './theme/ThemeProvider';
import { Button } from './components/Button/Button';

function ThemeToggle() {
  const { mode, toggleTheme } = useTheme();
  return (
    <Button
      variant="outlined"
      onClick={toggleTheme}
      style={{ position: 'fixed', top: '1rem', right: '1rem' }}
    >
      {mode === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
    </Button>
  );
}

function AppContent() {
  const { theme } = useTheme();
  
  return (
    <div style={{ 
      padding: theme.spacing.large,
      minHeight: '100vh',
      backgroundColor: theme.colors.background.default,
      color: theme.colors.text.primary,
      transition: theme.transitions.default
    }}>
      <ThemeToggle />
      <h1 style={{ 
        fontFamily: theme.typography.fontFamily,
        marginBottom: theme.spacing.large 
      }}>
        Button Component Examples
      </h1>
      
      <div style={{ display: 'flex', gap: theme.spacing.medium, marginBottom: theme.spacing.large }}>
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="outlined">Outlined Button</Button>
      </div>

      <div style={{ display: 'flex', gap: theme.spacing.medium, marginBottom: theme.spacing.large }}>
        <Button size="small">Small Button</Button>
        <Button size="medium">Medium Button</Button>
        <Button size="large">Large Button</Button>
      </div>

      <div style={{ marginBottom: theme.spacing.large }}>
        <Button fullWidth>Full Width Button</Button>
      </div>

      <Button disabled>Disabled Button</Button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

import { Button } from './components/Button/Button'

function App() {
  return (
    <div style={{ padding: '2rem', display: 'flex', gap: '1rem', flexDirection: 'column' }}>
      <h1>Button Component Examples</h1>
      
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

      <Button fullWidth>Full Width Button</Button>
      <Button disabled>Disabled Button</Button>
    </div>
  )
}

export default App

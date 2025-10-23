import TowerGame from './components/TowerGame/TowerGame'

export default function Home() {
  return (
    <main style={{ 
      width: '100%', 
      height: '100vh',
      margin: 0,
      padding: 0,
      overflow: 'hidden'
    }}>
      <TowerGame />
    </main>
  )
}

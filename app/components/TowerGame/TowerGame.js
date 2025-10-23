'use client'

export default function TowerGame() {
  return (
    <div style={{ 
      width: '100%', 
      height: '100vh',
      margin: 0,
      padding: 0,
      overflow: 'hidden'
    }}>
      <iframe 
        src="/tower-game/index.html"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block'
        }}
        title="Tower Game"
        allow="autoplay"
      />
    </div>
  )
}

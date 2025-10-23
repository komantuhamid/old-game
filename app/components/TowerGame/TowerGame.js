'use client'

export default function TowerGame() {
  return (
    <div style={{ 
      width: '100%', 
      height: '100vh',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
      position: 'relative'
    }}>
      <iframe 
        src="/tower-game/index.html"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0
        }}
        title="Tower Game"
        allow="autoplay; fullscreen"
        loading="eager"
      />
    </div>
  )
}

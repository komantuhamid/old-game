
'use client'

import { useEffect, useRef } from 'react'

export default function TowerGame() {
  const gameRef = useRef(null)
  
  useEffect(() => {
    // استيراد اللعبة
    import('./game/index.js').then((gameModule) => {
      // شغل اللعبة
      if (gameModule.default) {
        gameModule.default(gameRef.current)
      }
    })
  }, [])
  
  return (
    <div 
      ref={gameRef} 
      id="game-container"
      style={{ width: '100%', height: '100vh' }}
    />
  )
}

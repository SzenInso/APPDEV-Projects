import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Game() {
    const location = useLocation()
    const game = location.state.game
  return (
    <>
        <div className="">
            <h1>{game.name}</h1>
            <p>{game.desc}</p>
        </div>
    </>
  )
}

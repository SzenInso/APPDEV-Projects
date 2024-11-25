import React from 'react'
import { Link } from 'react-router-dom'
const games=[
    {id:1,name:'Teamfight Tactics',desc:'This is the number one auto battling game'},
    {id:2,name:'Valorant',desc:'This is the number one FPS game'},
    {id:3,name:'2XKO',desc:'This is the number one tag-team game'},
    {id:4,name:'League of Legends',desc:'This is the number one MOBA game'},
]
export default function Games() {
  return (
    <>
        <h1>Games List: </h1>
        <ul>
            {games.map((game)=>(
                <li key={game.id}>
                    <Link to={`/games/${game.id}`} state={{game}}><strong>{game.name}</strong></Link>
                </li>
            ))}
        </ul>
    </>
  )
}

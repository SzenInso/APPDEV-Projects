import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './Footer'
import Header from './Header'
import FavoriteGames from './FavoriteGames'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <FavoriteGames />
    <Footer />
    </>
  )
}

export default App

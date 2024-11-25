import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import About from './Components/About'
import NotFound from './Components/NotFound'
import Games from './Components/Games'
import Game from './Components/Game'

//when importing components ComponentName from file/ hierarchy
//contexts -> useState, useParams, BrowserRouter, Link, Route, Routes

function App() {

  return (
    <>
     <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/games'>Games</Link>
          </li>
        </ul>
      </nav>

     {/* Routes for the application */}
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/games'>
          <Route index element={<Games/>}/>
          <Route path=':gameId' element={<Game/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App

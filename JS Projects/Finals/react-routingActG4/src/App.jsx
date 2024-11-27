import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import NotFound from './Components/NotFound';
import Games from './Components/Games';
import Game from './Components/Game';
import Navbar from './Components/Navbar'; 

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/:gameId" element={<Game />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

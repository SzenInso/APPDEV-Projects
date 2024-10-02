import { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import Counter from './Counter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Counter />
      <Footer />
    </>
  )
}

export default App

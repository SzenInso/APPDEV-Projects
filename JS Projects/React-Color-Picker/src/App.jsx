import { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import { ColorPicker } from './ColorPicker'
import './App.css'

function App() {

  return (
    <>
      <Header/>
      <ColorPicker />
      <Footer/>
    </>
  )
}

export default App

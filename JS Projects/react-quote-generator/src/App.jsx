import { useState } from 'react'
import Header from './Header'
import QuoteGenerator from './QuoteGenerator'
import Footer from './Footer'
import './App.css'

function App() {

  return (
    <>
      <Header/>
      <QuoteGenerator />
      <Footer />
    </>
  )
}

export default App

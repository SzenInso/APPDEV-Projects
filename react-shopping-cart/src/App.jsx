import { useState } from 'react'
import './App.css'
import Login from './Login'

function App() {
  let items = [
    {id: 1, name: "Item 1", price: 10},
    {id: 2, name: "Item 2", price: 15},
    {id: 3, name: "Item 3", price: 20},
  ] //list of objects to be imported as props

  return (
    <>
    <Login />
    </>
  )
}

export default App

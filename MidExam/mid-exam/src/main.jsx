import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Identification from './Identification.jsx'
import App from './App.jsx'
import Counter from './Counter.jsx'
import Function from './Function.jsx'
import Paragraph from './Paragraph.jsx'
import MyCart from './MyCart.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Identification/>
    <App />
    <Counter />
    <Function/>
    <Paragraph />
    <MyCart />
    <Footer/>
  </StrictMode>,
)

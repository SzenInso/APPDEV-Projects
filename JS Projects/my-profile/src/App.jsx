import Header from './Header/Header'
import Profile from './ProfilePage/Profile'
import Footer from './Footer/Footer'
import './App.css'


function App() {

  return (
    <>
      <Header />
      <Profile name ="Fhrenne Szen I." food="Davao Mango" university="University of Baguio" course="Bachelor of Science in Computer Science" age={20}/>
      <Footer />
    </>
  )
}

export default App

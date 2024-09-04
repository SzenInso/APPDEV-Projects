import Header from "./Header.jsx"
import Body from "./Body.jsx"
import Footer from "./Footer.jsx"

export default function App (){
  return(
    <>
    <Header /> 
    <Body name ="Szen" food="pizza" isHealthy={false} age={23}/> 
    <Body />
    <Footer />
    </>
  )
}
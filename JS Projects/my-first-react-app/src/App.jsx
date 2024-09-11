import Header from "./Header.jsx"
import Body from "./Body.jsx"
import Footer from "./Footer.jsx"

export default function App (){
  return(
    <>
    <Header /> 
    <Body />
    <Body name ="Szen" food="Davao Mango" isHealthy={true} age={18}/> 
    <Body name ="Erin" food="Durian" isHealthy={true} age={21}/>
    <Body name ="Stephen" food="Corndog" isHealthy={false} age={21}/>
    <Body name ="Gerald" food="Torta" isHealthy={true} age={23}/>
    <Footer />
    </>
  )
}
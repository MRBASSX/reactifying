import React from 'react'
import "./Custom.css"
import Nav from './component/Nav'
import Home from './pages/Home'
import GlassmorphismFooter from './component/GlassmorphismFooter'


function App() {


 

 

  return (
    <>
     <Nav/>
    
     
   <Home name={"Mr Abass"} age = {129} birth ={"25/12/1995"} />
   <Home name={"Mr Evans"} age = {129} birth ={"25/12/1995"} />
   <Home name={"Mr Asante"} age = {129} birth ={"25/12/1995"}  />
   <GlassmorphismFooter/>
    </>
  )
}

export default App

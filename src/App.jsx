import React from 'react'
import "./Custom.css"
import Nav from './component/Nav'
import Home from './pages/Home'


function App() {


 

 

  return (
    <>
     <Nav/>
    
     
   <Home name={"Mr Abass"} age = {129} birth ={"25/12/1995"} />
   <Home name={"Mr Evans"} age = {129} birth ={"25/12/1995"} />
   <Home name={"Mr Asante"} age = {129} birth ={"25/12/1995"}  />
    </>
  )
}

export default App

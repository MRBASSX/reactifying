import React from 'react'
import "./Custom.css"
import Nav from './component/Nav'
import Home from './pages/Home'
import Button from './component/Button'

function App() {


  const Man = (e)=>{
    e.preventDefault();
    alert("Man")
    alert("Man")
  }

 

  return (
    <>
     <Nav/>
    
     {/* <Button onclick={alert("Woman")} name={"Woman"} />
     <Button onclick={alert("Elder")} name={"Elder"}/> */}
   <Home name={"Mr Abass"} age = {129} birth ={"25/12/1995"} />
   <Home name={"Mr Evans"} age = {129} birth ={"25/12/1995"} />
   <Home name={"Mr Asante"} age = {129} birth ={"25/12/1995"}  />
    </>
  )
}

export default App

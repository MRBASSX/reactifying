import React from 'react'

function Nav() {
  return (
    <div style={{"background":"black",
    "height":"200px",
    "display":"flex",
    "justifyContent":"space-around",
    "alignItems":"center"
    }}>
      <a href=""> Home</a>
      <a href="">About</a>
      <a href="">Contact</a>
    </div>
  )
}

export default Nav

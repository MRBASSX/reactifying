import React from 'react'

function Button({onClick,name}) {
  return (
    <div>
     <button type="button"  onClick={onClick} >{name}</button>
    </div>
  )
}

export default Button





import React from 'react'

function Button({className, type, content, icon}) {
  return (
    <button type={type} className={className}>{icon}{content}</button>
  )
}

export default Button
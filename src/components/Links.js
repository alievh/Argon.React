import React from 'react'

function Links({className, content, icon}) {
  return (
    <a href="#" className={className}>{icon}{content}</a>
  )
}

export default Links
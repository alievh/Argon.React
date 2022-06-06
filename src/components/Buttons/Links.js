import React from 'react'

function Links({link, className, content, icon}) {
  return (
    <a href={link} className={className}>{icon}{content}</a>
  )
}

export default Links
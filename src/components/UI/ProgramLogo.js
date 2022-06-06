import React from 'react'

function ProgramLogo({location, src, imgClassName}) {
  return (
    <a href={location}>
        <img className={imgClassName} src={src} alt="Avatar" />
    </a>
  )
}

export default ProgramLogo
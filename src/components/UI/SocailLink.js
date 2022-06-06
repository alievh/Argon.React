import React from 'react';

function SocailLink({link, target, content, className}) {
  return (
    <a className={className} href={link} target={target}>{content}</a>
  )
}

export default SocailLink;
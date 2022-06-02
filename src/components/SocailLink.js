import React from 'react';

function SocailLink({link, target, content}) {
  return (
    <a href={link} target={target}>{content}</a>
  )
}

export default SocailLink;
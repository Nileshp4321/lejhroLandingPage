import React from 'react'

const SocialIcon = (props) => {
  return (
  <>
    <a href={props.link}>
    <img src={props.source} className='m-2 icons' alt="img"  width={25} height={25} />
    </a>
  </>
  )
}

export default SocialIcon

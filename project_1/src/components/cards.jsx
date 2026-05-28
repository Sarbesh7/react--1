import React from 'react'
const Cards = (props) => {
  return (
<>
    <div className='card'>
     <div className='card-image'><img src={props.logo} alt="logo" /></div>
      <h3 className='card-title'>{props.title}</h3>
      <p className='card-content'>{props.description}</p>
 </div>

</>
  )
}

export default Cards    
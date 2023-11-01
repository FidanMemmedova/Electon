import React from 'react'

const Card = ({id,name,description}) => {
  return (
    <div style={{border:"1px solid black",padding:"10px", backgroundColor:"lightblue"}}>
        <p>{id}</p>
        <h2>{name}</h2>
        <p>{description}</p>
    </div>
  )
}

export default Card
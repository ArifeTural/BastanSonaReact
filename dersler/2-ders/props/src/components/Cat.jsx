import React from 'react'

const Cat = (props) => {
  return (
    <div>
        <p>{props.name}</p>
        <img src={props.img} alt="" />
        <p style={{background: props.color, color:"white"}} >color:Gray</p>
    </div>
  )
}

export default Cat